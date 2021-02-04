export class RegisterObj {
    public username: string;
    public password: string;
    public email: string;
    public confirmPassword: string;

    constructor(username:string, password:string, email: string, confirmPassword: string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.confirmPassword = confirmPassword
    }
}
