import "module-alias/register";

import { db } from "../infra/db/config";
import env from "./config/env";

(async () => {
	await db.connection.authenticate();
    console.log("Connection has been established successfully.");
    await db.connection.sync();
    console.log("Tables has been synced successfully.");
	const { setupApp } = await import("./config/app");
	const app = await setupApp();
	app.listen(env.port, () =>
		console.log(`Server running at http://localhost:${env.port}`)
	);
})();