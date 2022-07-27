import { BaseModel } from "./base";

export interface AvatarModel extends BaseModel {
	id: number;
	n: number;
	gender: number;
	type: number;
	name: string;
	filename: string;
	animation: JSON;
	visible: number;
	min_rank: number;
	note: number;
	gold_week: number;
	gold_month: number;
	gold_perm: number;
	cash_week: number;
	cash_month: number;
	cash_perm: number;
	stat_pop: number;
	stat_time: number;
	stat_atk: number;
	stat_def: number;
	stat_life: number;
	stat_item: number;
	stat_dig: number;
	stat_shld: number;
	remove_time: number;
}
