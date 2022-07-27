import { Express, Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";
import { KONG } from "../../../consts";

export default (app: Express): void => {
	
	// Routes public
	const routerPublic = Router();
	app.use(`/api/${KONG.PUBLIC}`, routerPublic);
	addRoutesToRouter(routerPublic, KONG.PUBLIC);

	// Routes private
	const routerSecure = Router();
	app.use(`/api/${KONG.SECURE}`, routerSecure);
	addRoutesToRouter(routerSecure, KONG.SECURE);
};

const addRoutesToRouter = (router: Router, typeSecurity: string) => {
	readdirSync(join(__dirname, "../routes/" + typeSecurity)).map(async (file) => {
		if (!file.endsWith(".map")) {
			(await import(`../routes/${typeSecurity}/${file}`)).default(router);
		}
	});
};
