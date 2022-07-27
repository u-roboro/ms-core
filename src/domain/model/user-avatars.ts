import { BaseModel } from "./base";

export interface UserAvatarsModel extends BaseModel {
	user_id: number;
	avatar_id: number;
	avatar_type: number;
	purchased_price: number;
	price_type: number;
	amount: number;
}
