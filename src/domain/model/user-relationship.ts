import { BaseModel } from "./base";

export interface UserRelationshipModel extends BaseModel {
	status: string;
	user_id_a: number;
	user_id_b: number;
}
