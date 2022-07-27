import * as Sequelize from "sequelize";

export const userEvents = {
	name: "user_events",
	columns: {
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true,
		},
		cash_24h: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		cash_4h: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	},
};
