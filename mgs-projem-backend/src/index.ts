// src/index.ts
import express from 'express';
import UserRouter from "./routes/user.router"
import ProjectRouter from "./routes/project.router"
import { ErrorHandleMiddleware } from './middleware/error.middleware';
import logRouter from './routes/log.router';
import CostemerRequestRouter from './routes/customerRequest.router';

const app = express();
const port = 3000;

app.use(express.json())
app.use("/auth", UserRouter)
app.use("/projects", ProjectRouter)
app.use("/log", logRouter)
app.use("/customerRequest", CostemerRequestRouter)

app.use(ErrorHandleMiddleware)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});