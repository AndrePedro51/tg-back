export interface ICreateDriverDto {
    id?: string;
    name: string;
    cpf: string;
    driver_license: number;
    license_category: string;
    antt: number;
    cnpj: string;
    active: boolean;
}
