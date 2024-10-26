import mongoose, { Model } from 'mongoose';
import { Post } from './post.schema';
import { InjectModel } from '@nestjs/mongoose';

export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async getPosts() {
    return this.postModel.find();
  }

  async createPost(dto: CreatePostDto) {
    return this.postModel.create(dto);
  }
}
