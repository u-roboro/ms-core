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
} from "../../factories/controllers/server-controller";

export default (router: Router): void => {
	router.post("/servers", adapters.adaptRoute(makeCreateController()));
	router.delete("/servers/:id", adapters.adaptRoute(makeDeleteByIdController()));
	router.delete("/servers/slug/:slug", adapters.adaptRoute(makeDeleteBySlugController()));
	router.delete("/servers", adapters.adaptRoute(makeDeleteByWhereController()));
	router.get("/servers", adapters.adaptRoute(makeFindAllController()));
	router.get("/servers/:id", adapters.adaptRoute(makeFindByIdController()));
	router.get("/servers/slug/:slug", adapters.adaptRoute(makeFindBySlugController()));
	router.get("/servers/where", adapters.adaptRoute(makeFindByWhereController()));
	router.put("/servers/:id", adapters.adaptRoute(makeUpdateByIdController()));
	router.put("/servers/slug/:slug", adapters.adaptRoute(makeUpdateBySlugController()));
	router.put("/servers", adapters.adaptRoute(makeUpdateByWhereController()));
};
