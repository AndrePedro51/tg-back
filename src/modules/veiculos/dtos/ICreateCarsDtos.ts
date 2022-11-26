interface ICreateCarDTO {
    license_plate: string,
    brand: string,
    color: string,
    model: string,
    category: string,
    id?: string;
}

export { ICreateCarDTO };