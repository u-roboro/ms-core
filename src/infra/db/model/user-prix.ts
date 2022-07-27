import * as Sequelize from "sequelize";

export const UserPrix = {
	name: "user_prix",
	columns: {
		points: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		points_type: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		points_reset_price: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true,
		},
	},
};
