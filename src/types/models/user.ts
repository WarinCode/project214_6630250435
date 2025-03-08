import { Ref } from "vue";

export default interface UserModel {
    fullname: string;
    age: number;
    studentId: number;
    sophomore: number;
    hobbies: string;
    faculty: string;
    major: string;
    university: string;
}

export interface UserModel2 extends Pick<UserModel, "fullname" | "studentId" | "major" | "faculty"> { }

export interface UserRef {
    fullname: Ref<string>; 
    studentId: Ref<number>;
    major: Ref<string>;
    faculty: Ref<string>;
}