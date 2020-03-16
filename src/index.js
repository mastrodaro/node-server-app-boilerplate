import restify from "restify";
import packageJson from "../package.json";
import registerExampleRoutes from "routes/example";

// Docs (req, res, plugins) - http://restify.com/docs/home/
// Errors - https://github.com/restify/errors

const server = restify.createServer({
  name: packageJson.name
});

server.pre(restify.plugins.pre.dedupeSlashes());

// use this plugin if planned to use BASIC Auth, stores in req.authorization
server.use(restify.plugins.authorizationParser());

// use this plugin if planned to use query params, stores in req.query
server.use(restify.plugins.queryParser());

registerExampleRoutes(server);

server.listen(8080, () =>
  console.log("%s listening at %s", server.name, server.url)
);
