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
} from "../../factories/controllers/user-controller";

export default (router: Router): void => {
	router.post("/users", adapters.adaptRoute(makeCreateController()));
	router.delete("/users/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/users/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/users", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/users", adapters.adaptRoute(makeFindAllController()));
	router.get("/users/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/users/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/users/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/users/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/users/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/users", adapters.adaptRoute(makeUpdateByWhereController()));
};
