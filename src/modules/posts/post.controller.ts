import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { PostService } from './post.service';

import { AuthGuard } from '../auth/auth.guard';

import { CreatePostDto, DeletePostDto } from './post.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/')
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  @Roles('admin')
  async createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  @Roles('admin')
  async deletePost(@Param() param: DeletePostDto) {
    return this.postService.deletePost(param.id);
  }
}
