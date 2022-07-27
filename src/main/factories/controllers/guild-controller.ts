import { GuildRepository } from "../../../infra/db/repositories";
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
	return new CreateGenericController(new GuildRepository());
};

export const makeDeleteByIdController = (): protocols.Controller => {
	return new DeleteByIdGenericController(new GuildRepository());
};

export const makeDeleteBySlugController = (): protocols.Controller => {
	return new DeleteBySlugGenericController(new GuildRepository());
};

export const makeDeleteByWhereController = (): protocols.Controller => {
	return new DeleteByWhereGenericController(new GuildRepository());
};

export const makeFindAllController = (): protocols.Controller => {
	return new FindAllGenericController(new GuildRepository());
};

export const makeFindByIdController = (): protocols.Controller => {
	return new FindByIdGenericController(new GuildRepository());
};

export const makeFindBySlugController = (): protocols.Controller => {
	return new FindBySlugGenericController(new GuildRepository());
};

export const makeFindByWhereController = (): protocols.Controller => {
	return new FindByWhereGenericController(new GuildRepository());
};

export const makeUpdateByIdController = (): protocols.Controller => {
	return new UpdateByIdGenericController(new GuildRepository());
};

export const makeUpdateBySlugController = (): protocols.Controller => {
	return new UpdateBySlugGenericController(new GuildRepository());
};

export const makeUpdateByWhereController = (): protocols.Controller => {
	return new UpdateByWhereGenericController(new GuildRepository());
};
