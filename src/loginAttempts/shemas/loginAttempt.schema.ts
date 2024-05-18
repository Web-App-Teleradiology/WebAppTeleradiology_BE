import mongoose, { Schema } from 'mongoose';
import { LoginAttemptInterface } from './../interface/loginAttempt.interface';

const loginAttemptSchema = new Schema<LoginAttemptInterface>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ipAddress: {
    type: String,
  },
  successful: {
    type: Boolean,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const LoginAttempt = mongoose.model<LoginAttemptInterface>('LoginAttempt', loginAttemptSchema);

export default LoginAttempt;