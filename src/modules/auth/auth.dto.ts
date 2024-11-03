import { Optional } from '@nestjs/common';
import { isNotEmpty, isEmpty, IsNotEmpty, ValidateIf } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class SignInDto {
  @ValidateIf((o) => isEmpty(o.username))
  @IsNotEmpty()
  email?: string;

  @ValidateIf((o) => isEmpty(o.email))
  @IsNotEmpty()
  username?: string;

  @IsNotEmpty()
  password: string;
}

export class ChangePasswordDto {
  readonly oldPassword: string;
  readonly newPassword: string;
}
