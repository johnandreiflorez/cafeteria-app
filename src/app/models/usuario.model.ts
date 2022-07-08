import { RolModel } from "./rol.model";

export  interface UsuarioModel{
    id?:number;
    name?: string;
    rol?: RolModel;
    email?:string;
    password?:string;
    repeatPassword?:string;
}