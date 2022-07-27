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
} from "../../factories/controllers/guild-members-controller";

export default (router: Router): void => {
	router.post("/guild-members", adapters.adaptRoute(makeCreateController()));
	router.delete("/guild-members/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/guild-members/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/guild-members", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/guild-members", adapters.adaptRoute(makeFindAllController()));
	router.get("/guild-members/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/guild-members/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/guild-members/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/guild-members/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/guild-members/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/guild-members", adapters.adaptRoute(makeUpdateByWhereController()));
};
