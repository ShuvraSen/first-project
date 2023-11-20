// import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  motherName: string;
  motherContact: string;
  motherOccupation: string;
};

export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: userName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'B+'
    | 'AB+'
    | 'O+'
    | 'A-'
    | 'B-'
    | 'AB-'
    | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
