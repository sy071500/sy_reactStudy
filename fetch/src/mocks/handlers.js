import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `JIMMY (${userId})`,
      })
    );
    //return res(ctx.status(400));
  }),

  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");
    return res(
      ctx.json({
        name: id === "1" ? "the one" : "the others",
      })
    );
  }),

  rest.get("http://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "Todo from Server",
        },
      })
    );
  }),

  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      //const id = req.url.searchParams.get("id");

      //const originalResponse = await ctx.fetch(req);
      //const originalResponseData = await originalResponse.json();

      return res(
        ctx.status(403),
        // And a response body, if necessary
        ctx.json({
          errorMessage: "Data not found",
        })
        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 135,
        //       },
        //     ],
        //   },
        // })
      );
    }
  ),
];
