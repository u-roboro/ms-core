import { BaseModel } from "./base";

export interface UserEventsModel extends BaseModel {
	user_id: number;
	cash_24h: number;
	cash_4h: number;
}
