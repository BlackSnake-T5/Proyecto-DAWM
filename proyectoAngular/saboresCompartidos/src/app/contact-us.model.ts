export class ContactUs {
    public mensaje: string;
    public first_name: string;
    public last_name: string;
    public pais: string;
    public email: string;

    constructor(mensaje:string, first_name:string, last_name: string, pais: string, email: string){
        this.mensaje = mensaje;
        this.first_name = first_name;
        this.last_name = last_name;
        this.pais = pais;
        this.email = email;
    }
}
