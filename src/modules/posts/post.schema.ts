import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';

import { SetCommonIdType } from 'src/shared/utils/schema';

@Schema()
class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  image: string;

  @Prop()
  date: string;
}

export { Post };

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.plugin(SetCommonIdType);
