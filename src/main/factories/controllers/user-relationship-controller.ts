import { UserRelationshipRepository } from "../../../infra/db/repositories";
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
	return new CreateGenericController(new UserRelationshipRepository());
};

export const makeDeleteByIdController = (): protocols.Controller => {
	return new DeleteByIdGenericController(new UserRelationshipRepository());
};

export const makeDeleteBySlugController = (): protocols.Controller => {
	return new DeleteBySlugGenericController(new UserRelationshipRepository());
};

export const makeDeleteByWhereController = (): protocols.Controller => {
	return new DeleteByWhereGenericController(new UserRelationshipRepository());
};

export const makeFindAllController = (): protocols.Controller => {
	return new FindAllGenericController(new UserRelationshipRepository());
};

export const makeFindByIdController = (): protocols.Controller => {
	return new FindByIdGenericController(new UserRelationshipRepository());
};

export const makeFindBySlugController = (): protocols.Controller => {
	return new FindBySlugGenericController(new UserRelationshipRepository());
};

export const makeFindByWhereController = (): protocols.Controller => {
	return new FindByWhereGenericController(new UserRelationshipRepository());
};

export const makeUpdateByIdController = (): protocols.Controller => {
	return new UpdateByIdGenericController(new UserRelationshipRepository());
};

export const makeUpdateBySlugController = (): protocols.Controller => {
	return new UpdateBySlugGenericController(new UserRelationshipRepository());
};

export const makeUpdateByWhereController = (): protocols.Controller => {
	return new UpdateByWhereGenericController(new UserRelationshipRepository());
};
