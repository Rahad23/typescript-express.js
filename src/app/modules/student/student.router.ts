import express from 'express';
import { StudentControllers } from './student.controller';

const studentRouter = express.Router();

studentRouter.post('/save-student', StudentControllers.getStudentData);

export const studentRouts = studentRouter;
