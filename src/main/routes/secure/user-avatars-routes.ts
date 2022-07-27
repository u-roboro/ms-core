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
} from "../../factories/controllers/user-avatars-controller";

export default (router: Router): void => {
	router.post("/user-avatars", adapters.adaptRoute(makeCreateController()));
	router.delete("/user-avatars/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/user-avatars/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/user-avatars", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/user-avatars", adapters.adaptRoute(makeFindAllController()));
	router.get("/user-avatars/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/user-avatars/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/user-avatars/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/user-avatars/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/user-avatars/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/user-avatars", adapters.adaptRoute(makeUpdateByWhereController()));
};
