export interface ICreateUserDto {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    isAdmin: boolean;
}
