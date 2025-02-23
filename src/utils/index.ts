import { Ref } from "vue";
import { AxiosRequestConfig } from "axios";
import useLocalStorage from "@/hooks/useLocalStorage";
import CourseModel, { CourseRef } from "@/types/models/course"
import { ContactRef, ContactDetails, ActionTypes } from "@/types";

export const getApiUrl = (): string => {
    return "http://localhost:3452/api";
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