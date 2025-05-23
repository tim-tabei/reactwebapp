import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function message(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get("name") || (await request.text()) || "world";

  return {
    jsonBody: {
      body: `Hello, ${name}!`,
    },
  };
}

app.http("message", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: message,
});
