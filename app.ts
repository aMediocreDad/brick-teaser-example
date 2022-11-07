import "./polyfill.js";

import Fastify from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import { renderTeaser, getCssText, type TeaserApi } from "@amedia/brick-teaser";
import teasers from "./data.json" assert { type: "json" };
import View from "./view";

const server = Fastify({ logger: true }).withTypeProvider<JsonSchemaToTsProvider>();

const createList = (teasers: TeaserApi[]) => {
	return teasers
		.map((t) => `<div class="container">${renderTeaser(t, { experimentalBrickImage: true })}</div>`)
		.join("");
};

server.get("/", (request, reply) => {
	const l1 = createList(teasers.slice(0, 3));
	const l2 = createList(teasers.slice(3, 5));
	const l3 = createList(teasers.slice(5, 6));
	const renderedTeasers = teasers.map((t) => renderTeaser(t, { experimentalBrickImage: true })).join("");
	reply.type("text/html");
	return View({ l1, l2, l3, css: getCssText() });
});

const start = async () => {
	try {
		await server.listen({ port: 1337 });
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};
start();
