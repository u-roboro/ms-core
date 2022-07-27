import { BaseModel } from "./base";

export interface UserPrixModel extends BaseModel{
    points: number;
    points_type: number;
    points_reset_price: number;
    user_id: number;
}