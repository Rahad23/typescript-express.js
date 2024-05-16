import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  name: userNameSchema,
  gender: ['Male', 'Female'], // mongoose enam type
  dateOfBirth: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  email: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  isActive: ['Active', 'Block'],
});

// 3. Create a Model.
export const StudentModel = model<Student>('Student', studentSchema);
