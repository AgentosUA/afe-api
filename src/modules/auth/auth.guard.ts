import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from 'src/shared/decorators/roles.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles =
      this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? [];

    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const user = await this.verifyAndGetUser(token);

      if (requiredRoles.length && !requiredRoles.includes(user.role)) {
        throw new ForbiddenException(
          'You role is not allowed to access this resource',
        );
      }

      request['user'] = {
        userId: user.userId,
        role: user.role,
      };
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  public async verifyAndGetUser(token = '') {
    const user = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    return user;
  }

  public extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request?.headers?.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
