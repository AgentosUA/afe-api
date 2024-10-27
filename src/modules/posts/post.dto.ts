import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  content: string;

  @IsOptional()
  image: string;

  @IsOptional()
  date: string;
}

export class UpdatePostDto {
  id: string;
  title?: string;
  content?: string;
  date?: string;
}

export class DeletePostDto {
  @IsNotEmpty()

  @IsMongoId()
  id: string;
}
