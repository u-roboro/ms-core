import * as Sequelize from "sequelize";

export const Account = {
	name: "accounts",
	columns: {
		username: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		slug: {
			type: Sequelize.STRING,
			allowNull: false,
		}
	},
};