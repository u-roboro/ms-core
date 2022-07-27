import * as Sequelize from "sequelize";

export const GuildMembers = {
	name: "guild_members",
	columns: {
		guild_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true,
		},
		job: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
        }
	},
};