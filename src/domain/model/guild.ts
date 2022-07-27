import { BaseModel } from "./base";

export interface GuildModel extends BaseModel {
	name: string;
	user_master_id: string;
}
