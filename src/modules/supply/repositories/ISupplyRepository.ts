import { Supply } from "../infra/entities/Supply";
import { ICreateSupplyInput } from "../dtos/ICreateSupply";

export interface ISupplyRepository {
    createSupply(input: ICreateSupplyInput): Promise<Supply>;
}
