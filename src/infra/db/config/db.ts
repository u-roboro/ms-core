import { Sequelize } from "sequelize";
import * as Models from "../model";

const connection: Sequelize = new Sequelize(
	"softnyx",
	"root",
	"wilmerdelgadoalama",
	{
		host: "localhost",
		dialect: "mysql",
		logging: false,
	}
);

export const db = {
	connection,
	models: {
		account: connection.define(Models.Account.name, Models.Account.columns),
		avatar: connection.define(Models.Avatar.name, Models.Avatar.columns),
		guildMembers: connection.define(
			Models.GuildMembers.name,
			Models.GuildMembers.columns
		),
		guild: connection.define(Models.Guild.name, Models.Guild.columns),
		server: connection.define(Models.Server.name, Models.Server.columns),
		userAvatarEquipped: connection.define(
			Models.userAvatarEquipped.name,
			Models.userAvatarEquipped.columns
		),
		userAvatars: connection.define(
			Models.UserAvatars.name,
			Models.UserAvatars.columns
		),
		userEvents: connection.define(
			Models.userEvents.name,
			Models.userEvents.columns
		),
		userPrix: connection.define(Models.UserPrix.name, Models.UserPrix.columns),
		userRelationship: connection.define(
			Models.userRelationship.name,
			Models.userRelationship.columns
		),
		user: connection.define(Models.User.name, Models.User.columns),
	},
};
