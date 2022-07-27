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
} from "../../factories/controllers/user-relationship-controller";

export default (router: Router): void => {
	router.post("/user-relationship", adapters.adaptRoute(makeCreateController()));
	router.delete("/user-relationship/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/user-relationship/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/user-relationship", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/user-relationship", adapters.adaptRoute(makeFindAllController()));
	router.get("/user-relationship/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/user-relationship/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/user-relationship/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/user-relationship/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/user-relationship/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/user-relationship", adapters.adaptRoute(makeUpdateByWhereController()));
};
