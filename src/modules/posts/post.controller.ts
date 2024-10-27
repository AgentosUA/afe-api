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

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/')
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  async createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Delete('/:id')
  // @UseGuards(AuthGuard)
  async deletePost(@Param() param: DeletePostDto) {
    return this.postService.deletePost(param.id);
  }
}
