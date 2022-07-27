import * as Sequelize from "sequelize";

export const userAvatarEquipped = {
	name: "user_avatar_equipped",
	columns: {
		head: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		body: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		eyes: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		flag: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		background: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		foreground: {
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
