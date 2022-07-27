import { UserAvatarsRepository } from "../../../infra/db/repositories";
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
	return new CreateGenericController(new UserAvatarsRepository());
};

export const makeDeleteByIdController = (): protocols.Controller => {
	return new DeleteByIdGenericController(new UserAvatarsRepository());
};

export const makeDeleteBySlugController = (): protocols.Controller => {
	return new DeleteBySlugGenericController(new UserAvatarsRepository());
};

export const makeDeleteByWhereController = (): protocols.Controller => {
	return new DeleteByWhereGenericController(new UserAvatarsRepository());
};

export const makeFindAllController = (): protocols.Controller => {
	return new FindAllGenericController(new UserAvatarsRepository());
};

export const makeFindByIdController = (): protocols.Controller => {
	return new FindByIdGenericController(new UserAvatarsRepository());
};

export const makeFindBySlugController = (): protocols.Controller => {
	return new FindBySlugGenericController(new UserAvatarsRepository());
};

export const makeFindByWhereController = (): protocols.Controller => {
	return new FindByWhereGenericController(new UserAvatarsRepository());
};

export const makeUpdateByIdController = (): protocols.Controller => {
	return new UpdateByIdGenericController(new UserAvatarsRepository());
};

export const makeUpdateBySlugController = (): protocols.Controller => {
	return new UpdateBySlugGenericController(new UserAvatarsRepository());
};

export const makeUpdateByWhereController = (): protocols.Controller => {
	return new UpdateByWhereGenericController(new UserAvatarsRepository());
};
