import * as Sequelize from "sequelize";

export const userRelationship = {
	name: "user_relationship",
	columns: {
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: "",
		},
		user_id_a: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		user_id_b: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	},
};
