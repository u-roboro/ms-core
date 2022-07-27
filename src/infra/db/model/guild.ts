import * as Sequelize from "sequelize";

export const Guild = {
	name: "guild",
	columns: {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		user_master_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		slug: {
			type: Sequelize.STRING,
			allowNull: false,
		}
	},
};