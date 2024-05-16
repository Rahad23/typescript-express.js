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

export const StudentControllers = {
  getStudentData,
};
