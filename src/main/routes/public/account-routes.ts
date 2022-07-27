import { Router } from "express";

export default (router: Router): void => {
	router.get(`/`, (req, res) => {
		res.send("default in public");
	});
};
