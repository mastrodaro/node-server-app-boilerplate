import { Router } from "restify-router";
import exampleModel from "models/example";
import { OK } from "http-status-codes";
import { NotFoundError } from "restify-errors";

export default server => {
  const router = new Router();

  router.get("", (req, res, next) => {
    const items = exampleModel.getAll();
    res.send(OK, items);
    next();
  });

  router.get("/:id", (req, res, next) => {
    const item = exampleModel.get(+req.params.id);
    if (item === undefined) {
      return next(new NotFoundError("Item not found"));
    }
    res.send(OK, item);
    return next();
  });

  router.applyRoutes(server, "/api/example");
};
