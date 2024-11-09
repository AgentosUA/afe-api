import mongoose, { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getProfile(userId: string) {
    return this.userModel
      .findById(new mongoose.Types.ObjectId(userId))
      .select('-password -__v -tempPassword -email');
  }

  async updateSteamId(userId: string, steamId: string) {
    return this.userModel
      .findByIdAndUpdate(
        new mongoose.Types.ObjectId(userId),
        { steamId },
        { new: true },
      )
      .select('-password -__v -tempPassword');
  };

  async changeAvatar(userId: string, avatar: string) {
    return this.userModel
      .findByIdAndUpdate(
        new mongoose.Types.ObjectId(userId),
        { avatar },
        { new: true },
      )
      .select('-password -__v -tempPassword');
  }
}
