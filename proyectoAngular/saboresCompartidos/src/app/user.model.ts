export class User {
    public id: number;
    public profile: number;
    public full_name: string;
    public email: string;
    public username: string;
    public token: string;

    constructor(object: any){
        this.id = object.id
        this.profile = object.profile;
        this.token = object.token;
        this.full_name = object.full_name;
        this.email = object.email;
        this.username = object.username;
    }
}