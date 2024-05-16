import express from 'express';
import { StudentControllers } from './student.controller';

const studentRouter = express.Router();

studentRouter.post('/save-student', StudentControllers.getStudentData);
studentRouter.get('/', StudentControllers.getAllStudentsData);
studentRouter.get('/:studentId', StudentControllers.getOneStudentData);

export const studentRouts = studentRouter;
