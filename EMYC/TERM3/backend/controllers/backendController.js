const createUser = async (req, res) => {
  const { name, phone } = req.body;
  //   console.log(data);
  //   res.status(201).json({ data: data });

  const response = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone }),
  });
  const user = await response.json();

  res.json(user);
};

const getUser = async (req, res) => {
  const response = await fetch("http://localhost:4000/users");
  const users = await response.json();
  res.json(users);
};
module.exports = { createUser, getUser };
