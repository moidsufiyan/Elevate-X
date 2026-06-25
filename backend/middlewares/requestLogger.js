import morgan from "morgan";

// Token for logging safe request bodies (excluding sensitive fields)
morgan.token("body", (req) => {
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    const bodyCopy = { ...req.body };
    if (bodyCopy.password) bodyCopy.password = "[HIDDEN]";
    if (bodyCopy.refreshToken) bodyCopy.refreshToken = "[HIDDEN]";
    return JSON.stringify(bodyCopy);
  }
  return "";
});

const requestLogger = morgan(
  ":method :url :status :response-time ms - :res[content-length] - body: :body"
);

export default requestLogger;
