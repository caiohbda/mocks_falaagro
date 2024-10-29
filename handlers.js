const { rest } = require("msw");

let users = [];

const handlers = [
    
  rest.get("/user/id", (req, res, ctx) => {
    if (users.length > 0) {
      return res(ctx.status(200), ctx.json(users[0]));
    } else {
      return res(ctx.status(404), ctx.json({ message: "User not found." }));
    }
  }),

  rest.post("/user", (req, res, ctx) => {
    const { firstname, lastname, email, password } = req.body;

    const newUser = {
      id: (users.length + 1).toString(),
      firstname,
      lastname,
      email,
      password,
    };

    users.push(newUser);
    return res(ctx.status(201), ctx.json(newUser));
  }),
];

module.exports = { handlers };
