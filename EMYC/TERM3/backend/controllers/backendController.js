const { response } = require("express");

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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`http://localhost:4000/users/${id}`);

  const user = await response.json();
  res.send(user);
};

const updateUser = async (req, res) => {
  const { name, phone } = req.body;
  const { id } = req.params;
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone }),
  });
  const updatedUser = await response.json();

  res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: "DELETE",
  });
  const deletedUser = await response.json();
  res.status(200).json(deletedUser);
};

module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };
