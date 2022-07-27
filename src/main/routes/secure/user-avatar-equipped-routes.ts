import { Router } from "express";
import { adapters } from "urobo";
import { makeCreateController,
makeDeleteByIdController,
makeDeleteBySlugController,
makeDeleteByWhereController,
makeFindAllController,
makeFindByIdController,
makeFindBySlugController,
makeFindByWhereController,
makeUpdateByIdController,
makeUpdateBySlugController,
makeUpdateByWhereController
} from "../../factories/controllers/user-avatar-equipped-controller";

export default (router: Router): void => {
	router.post("/user-avatar-equipped", adapters.adaptRoute(makeCreateController()));
	router.delete("/user-avatar-equipped/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/user-avatar-equipped/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/user-avatar-equipped", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/user-avatar-equipped", adapters.adaptRoute(makeFindAllController()));
	router.get("/user-avatar-equipped/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/user-avatar-equipped/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/user-avatar-equipped/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/user-avatar-equipped/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/user-avatar-equipped/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/user-avatar-equipped", adapters.adaptRoute(makeUpdateByWhereController()));
};
