const express = require('express');
const app = express();

const userRouter = require('./src/routes/user.route');

const port = 3000
app.use(express.json());
app.use('/user', userRouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));