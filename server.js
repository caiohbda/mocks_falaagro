const { setupServer } = require("msw/node");
const { handlers } = require("./handlers");

const PORT = 3000;
const server = setupServer(...handlers);

server.listen({ onUnhandledRequest: "warn" });

console.log(`o server ta rodando: http://localhost:${PORT}`);

process.stdin.resume();
