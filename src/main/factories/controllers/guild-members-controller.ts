import { GuildMembersRepository } from "../../../infra/db/repositories";
import { protocols } from "urobo";
import {
	CreateGenericController,
	DeleteByIdGenericController,
	DeleteBySlugGenericController,
	DeleteByWhereGenericController,
	FindAllGenericController,
	FindByIdGenericController,
	FindBySlugGenericController,
	FindByWhereGenericController,
	UpdateBySlugGenericController,
	UpdateByWhereGenericController,
	UpdateByIdGenericController,
} from "../../../presentation/controllers/generic";

export const makeCreateController = (): protocols.Controller => {
	return new CreateGenericController(new GuildMembersRepository());
};

export const makeDeleteByIdController = (): protocols.Controller => {
	return new DeleteByIdGenericController(new GuildMembersRepository());
};

export const makeDeleteBySlugController = (): protocols.Controller => {
	return new DeleteBySlugGenericController(new GuildMembersRepository());
};

export const makeDeleteByWhereController = (): protocols.Controller => {
	return new DeleteByWhereGenericController(new GuildMembersRepository());
};

export const makeFindAllController = (): protocols.Controller => {
	return new FindAllGenericController(new GuildMembersRepository());
};

export const makeFindByIdController = (): protocols.Controller => {
	return new FindByIdGenericController(new GuildMembersRepository());
};

export const makeFindBySlugController = (): protocols.Controller => {
	return new FindBySlugGenericController(new GuildMembersRepository());
};

export const makeFindByWhereController = (): protocols.Controller => {
	return new FindByWhereGenericController(new GuildMembersRepository());
};

export const makeUpdateByIdController = (): protocols.Controller => {
	return new UpdateByIdGenericController(new GuildMembersRepository());
};

export const makeUpdateBySlugController = (): protocols.Controller => {
	return new UpdateBySlugGenericController(new GuildMembersRepository());
};

export const makeUpdateByWhereController = (): protocols.Controller => {
	return new UpdateByWhereGenericController(new GuildMembersRepository());
};
