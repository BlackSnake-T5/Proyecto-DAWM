import { User } from './user.model';

export class Session {
    public user: User;

    constructor(user: any){
        this.user = user;
    }
  }