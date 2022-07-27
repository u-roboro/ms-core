import { BaseModel } from "./base";

export interface UserModel extends BaseModel {
	account_id: number;
	rank: number;
	country: string;
	game_id: string;
	gender: string;
	gp: number;
	gold: number;
	cash: number;
	unlock: number;
	photo_url: string;
	name_changes: number;
}
