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
} from "../../factories/controllers/user-prix-controller";

export default (router: Router): void => {
	router.post("/user-prix", adapters.adaptRoute(makeCreateController()));
	router.delete("/user-prix/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/user-prix/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/user-prix", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/user-prix", adapters.adaptRoute(makeFindAllController()));
	router.get("/user-prix/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/user-prix/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/user-prix/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/user-prix/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/user-prix/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/user-prix", adapters.adaptRoute(makeUpdateByWhereController()));
};
