import { Request, Response } from 'express';
import { studentService } from './student.service';

const getStudentData = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //will call service function send to data
    const result = await studentService.createStudentToDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student create successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllStudentsData = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retrieved successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getOneStudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getOneStudentDataFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Get one student data successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const StudentControllers = {
  getStudentData,
  getAllStudentsData,
  getOneStudentData,
};
