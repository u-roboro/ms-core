import { ServerRepository } from "../../../infra/db/repositories";
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
	return new CreateGenericController(new ServerRepository());
};

export const makeDeleteByIdController = (): protocols.Controller => {
	return new DeleteByIdGenericController(new ServerRepository());
};

export const makeDeleteBySlugController = (): protocols.Controller => {
	return new DeleteBySlugGenericController(new ServerRepository());
};

export const makeDeleteByWhereController = (): protocols.Controller => {
	return new DeleteByWhereGenericController(new ServerRepository());
};

export const makeFindAllController = (): protocols.Controller => {
	return new FindAllGenericController(new ServerRepository());
};

export const makeFindByIdController = (): protocols.Controller => {
	return new FindByIdGenericController(new ServerRepository());
};

export const makeFindBySlugController = (): protocols.Controller => {
	return new FindBySlugGenericController(new ServerRepository());
};

export const makeFindByWhereController = (): protocols.Controller => {
	return new FindByWhereGenericController(new ServerRepository());
};

export const makeUpdateByIdController = (): protocols.Controller => {
	return new UpdateByIdGenericController(new ServerRepository());
};

export const makeUpdateBySlugController = (): protocols.Controller => {
	return new UpdateBySlugGenericController(new ServerRepository());
};

export const makeUpdateByWhereController = (): protocols.Controller => {
	return new UpdateByWhereGenericController(new ServerRepository());
};
