import mongoose, { Model } from 'mongoose';
import { Post } from './post.schema';
import { InjectModel } from '@nestjs/mongoose';
import type { CreatePostDto } from './post.dto';

export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async getPosts() {
    return this.postModel.find();
  }

  async createPost(dto: CreatePostDto) {
    return new this.postModel(dto).save();
  }

  async deletePost(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
