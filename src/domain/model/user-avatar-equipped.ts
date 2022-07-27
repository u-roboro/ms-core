import { BaseModel } from "./base";

export interface UserAvatarEquippedModel extends BaseModel{
    head: number;
    body: number;
    eyes: number;
    flag: number;
    background: number;
    foreground: number;
    user_id: number;
}