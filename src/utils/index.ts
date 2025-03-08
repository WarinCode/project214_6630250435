import { Ref } from "vue";
import { AxiosRequestConfig } from "axios";
import useLocalStorage from "@/hooks/useLocalStorage";
import CourseModel, { CourseRef } from "@/types/models/course"
import { ContactRef, ContactDetails, ActionTypes } from "@/types";
import UserModel, { UserModel2, UserRef } from "@/types/models/user";

export const getDomain = (): string => {
    if (import.meta.env.DEV) {
        return "http://localhost:3452";
    }
    return "https://server-for-vue-portfolio.onrender.com";
}

export const getApiUrl = (): string => {
    return getDomain() + "/api";
}

export const getRefValue = <T>(param: Ref<T>): T => {
    return param.value;
}

export const getRefValues = (course: CourseRef): CourseModel => {
    return {
        id: getRefValue<string>(course.id),
        courseCode: getRefValue<string>(course.courseCode),
        courseName: getRefValue<string>(course.courseName),
        grade: getRefValue<string>(course.grade),
        credit: getRefValue<number>(course.credit)
    }
}

export const getCurrentId = (courses: CourseModel[]): string => {
    return courses.length === 0 ? "1" : String(courses.length + 1);
}

export const formValidation = ({ id, courseName, courseCode }: CourseModel, courses: CourseModel[]): void => {
    if (courseName.length === 0) {
        throw new Error("โปรดกรอกชื่อวิชา!");
    }

    for (let i: number = 0; i <= 9; i++) {
        if (courseName.startsWith(i.toString())) {
            throw new Error("ชื่อวิชาไม่สามารถขึ้นต้นด้วยตัวเลขได้!");
        }
    }

    if (courseCode.length < 8) {
        throw new Error("รหัสวิชาต้องมีความยาวเท่ากับ 8!");
    }

    if (isNaN(parseInt(courseCode))) {
        throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
    }

    for (let j: number = 0; j < 8; j++) {
        if (isNaN(parseInt(courseCode[j]))) {
            throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
        }
    }

    if (courses.some((c: CourseModel): boolean => (c.courseCode === courseCode || c.courseName === courseName) && c.id !== id)) {
        throw new Error("ไม่สามารถเพิ่มรายวิชาที่ซ้ำกันได้!");
    }
}

export const validateUserData = ({ fullname, studentId, major, faculty }: UserModel): void => {
    if (fullname.length === 0) {
        throw new Error("โปรดกรอกชื่อ!");
    }

    if (major.length === 0) {
        throw new Error("โปรดกรอกสาขา!");
    }

    if (faculty.length === 0) {
        throw new Error("โปรดกรอกคณะ!");
    }

    for (let i: number = 0; i < fullname.length; i++) {
        if (fullname.startsWith(i.toString())) {
            throw new Error("ชื่อไม่สามารถขึ้นต้นด้วยตัวเลขได้!");
        }
    }

    if (isNaN(studentId)) {
        throw new Error("รหัสนิสิตต้องเป็นตัวเลขเท่านั้น!");
    }

    for (let j: number = 0; j < 10; j++) {
        if (isNaN(parseInt(String(studentId)[j]))) {
            throw new Error("รหัสนิสิตต้องเป็นตัวเลขเท่านั้น!");
        }
    }

    if (String(studentId).length < 10) {
        throw new Error("รหัสนิสิตต้องมีความยาวเท่ากับ 10!");
    }
}

export const getEnv = (key: keyof ImportMetaEnv): string => {
    return import.meta.env[key];
}

export const getContactDetails = (contact: ContactRef): ContactDetails => {
    return {
        senderName: getRefValue<string>(contact.senderName),
        email: getRefValue<string>(contact.email),
        message: getRefValue<string>(contact.message),
        date: getRefValue<string>(contact.date)
    }
}

export const getAxiosConfigs = (): AxiosRequestConfig => {
    const { result } = useLocalStorage(ActionTypes.Read, "token");

    return {
        headers: {
            Authorization: result.value
        }
    }
}

export const getUserData = (user: UserRef): UserModel2 => {
    return {
        fullname: getRefValue<string>(user.fullname),
        studentId: getRefValue<number>(user.studentId),
        faculty: getRefValue<string>(user.faculty),
        major: getRefValue<string>(user.major)
    }
}