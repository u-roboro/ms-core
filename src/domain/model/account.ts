import { BaseModel } from "./base";

export interface AccountModel extends BaseModel {
	username: string;
	password: string;
}
