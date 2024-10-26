import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { PostService } from './post.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/')
  @UseGuards(AuthGuard)
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post('/')
  @UseGuards(AuthGuard)
  async createPost(@Body() dto) {
    return this.postService.createPost(dto);
  }
}
