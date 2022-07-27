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
} from "../../factories/controllers/account-controller";

export default (router: Router): void => {
	router.post("/accounts", adapters.adaptRoute(makeCreateController()));
	router.delete("/accounts/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/accounts/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/accounts", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/accounts", adapters.adaptRoute(makeFindAllController()));
	router.get("/accounts/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/accounts/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/accounts/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/accounts/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/accounts/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/accounts", adapters.adaptRoute(makeUpdateByWhereController()));
};
