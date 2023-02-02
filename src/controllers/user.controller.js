const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).json({ error: 'Please fill all fields' });
  }

  const user = {
    name,
    username,
    email,
    password,
    avatar,
    background
  };

  res.status(201).json({ message: "User created succesfully", user });
}

module.exports = { create };