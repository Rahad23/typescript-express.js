import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouts } from './app/modules/student/student.router';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', studentRouts);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
