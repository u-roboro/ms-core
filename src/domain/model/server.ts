import { BaseModel } from "./base";

export interface ServerModel extends BaseModel{
    name: string;
    type: number;
    subtype: number;
    port: number;
    player_online: number;
    max_players: number;
    min_level: number;
    max_level: number;
    is_active: boolean;
}