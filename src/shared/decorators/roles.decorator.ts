import { SetMetadata } from '@nestjs/common';

type role = 'admin' | 'moderator' | 'user';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: role[]) => SetMetadata(ROLES_KEY, roles);
