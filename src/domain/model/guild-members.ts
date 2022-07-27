import { BaseModel } from "./base";

export interface GuildMembersModel extends BaseModel {
    guild_id: number;
    user_id: number;
    job: number;
}