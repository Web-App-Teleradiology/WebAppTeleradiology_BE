export class LoginAttemptDTO {
  user: string;
  ipAddress?: string;
  successful: boolean;
  timestamp: Date;

  constructor(user: string, successful: boolean, ipAddress?: string, timestamp?: Date) {
    this.user = user;
    this.ipAddress = ipAddress;
    this.successful = successful;
    this.timestamp = timestamp || new Date();
  }
}