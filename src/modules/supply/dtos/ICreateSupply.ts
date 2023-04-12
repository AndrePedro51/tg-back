import { SupplyType } from "../enums/enums";

export interface ICreateSupplyInput {
    id?: string;
    car_id?: string;
    driver_id?: string;
    user_id: string;
    quantity: number;
    description?: string;
    type: SupplyType;
}
