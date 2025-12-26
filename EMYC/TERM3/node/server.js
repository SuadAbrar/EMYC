const { addEmail } = require("./addEmail");
const { users } = require("./index");
const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log("requested");
  //   console.log(req.headers);
  if (req.url == "/addEmail") {
    const newUsers = addEmail(users);
    console.log(newUsers);
    // res.write(newUsers);
    res.writeHead(200);
    res.end(JSON.stringify(newUsers));
  } else if (req.url == "/addUser" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      //   console.log(body);
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);
      //   console.log(parsedBody);

      const existed = users.find((u) => u.phone == parsedBody.phone);
      if (existed) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end("user already exists");
        return;
      }
      const email = {
        id: users.length + 1,
        ...parsedBody,
        email: `${parsedBody.name}${parsedBody.phone}@gmail.com`,
      };
      const user = addEmail(users);
      user.push(email);
      res.end(JSON.stringify(user));
    });
  }
  // else if (req.url == "/getUsers" && req.method == "GET") {
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }
  else if (req.method == "DELETE") {
    const userId = req.url.split("/")[2];
    const userIndex = users.findIndex((u) => {
      u.id === userId;
    });
    // console.log(userId);
    const deleteUser = users.splice(userIndex, 1);
    res.end(JSON.stringify({ deleteUser: deleteUser[0], users }));
  } else if (req.method == "PUT") {
    const userId = req.url.split("/")[2];
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      //   console.log(body);
    });
    req.on("end", () => {
      const update = JSON.parse(body);

      const userIndex = users.findIndex((u) => {
        u.id === userId;
      });
      users[userIndex] = {
        ...update,
      };
      res.end(JSON.stringify({ user: users[userIndex] }));
    });
  }
});

// req.post('/addEmail', ()=>{

// })
server.listen(4000, () => {
  console.log("server is running with port 4000");
});
