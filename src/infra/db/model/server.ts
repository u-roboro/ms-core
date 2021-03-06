import * as Sequelize from "sequelize";

export const Server = {
	name: "server",
	columns: {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		type: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		subtype: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		port: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		player_online: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		max_player: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		min_level: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		max_level: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		is_active: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
		slug: {
			type: Sequelize.STRING,
			allowNull: false,
		}
	},
};