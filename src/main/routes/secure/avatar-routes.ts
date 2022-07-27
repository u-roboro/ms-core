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
} from "../../factories/controllers/avatar-controller";

export default (router: Router): void => {
	router.post("/avatars", adapters.adaptRoute(makeCreateController()));
	router.delete("/avatars/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/avatars/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/avatars", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/avatars", adapters.adaptRoute(makeFindAllController()));
	router.get("/avatars/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/avatars/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/avatars/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/avatars/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/avatars/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/avatars", adapters.adaptRoute(makeUpdateByWhereController()));
};
