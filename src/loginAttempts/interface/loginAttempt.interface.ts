
import { Document, Schema} from 'mongoose';

export interface LoginAttemptInterface extends Document {
  user: Schema.Types.ObjectId;
  ipAddress?: string;
  successful: boolean;
  timestamp: Date;
}
