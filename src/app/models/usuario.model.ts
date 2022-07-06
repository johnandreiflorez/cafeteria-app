import { RolModel } from "./rol.model";

export  interface UsuarioModel{
    id?:number;
    name?:string;
    email?: string;
    password?:string;
}