
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
} from "../../factories/controllers/guild-controller";

export default (router: Router): void => {
	router.post("/guild", adapters.adaptRoute(makeCreateController()));
	router.delete("/guild/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/guild/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/guild", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/guild", adapters.adaptRoute(makeFindAllController()));
	router.get("/guild/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/guild/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/guild/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/guild/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/guild/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/guild", adapters.adaptRoute(makeUpdateByWhereController()));
};
