import { Ref } from "vue";
import axios from "axios";
import CourseModel, { CourseRef } from "@/types/models/course"

export const getLocalhost = (): string => {
    return "http://localhost:3000"
}

export const getRefValue = <T>(param: Ref<T>): T => {
    return param.value;
}

export const getRefValues = (course: CourseRef): CourseModel => {
    return {
        id: getRefValue<string>(course.id),
        courseName: getRefValue<string>(course.courseName),
        courseCode: getRefValue<string>(course.courseCode),
        grade: getRefValue<string>(course.grade),
        credit: getRefValue<number>(course.credit)
    }
}

export const getCurrentId = (courses: CourseModel[]): string => {
    return courses.length === 0 ? "1" : String(courses.length + 1);
}

export const formValidation = (courseRef: CourseRef, cb: () => void): void => {
    const { id, courseName, courseCode, grade, credit }: CourseModel = getRefValues(courseRef);

    if (courseName.length === 0) {
        cb();
        throw new Error("โปรดกรอกชื่อวิชา!");
      }
  
    //   for (let i: number = 0; i <= 9; i++) {
    //     if (getCurrentValue(courseName).startsWith(i.toString())) {
    //       setCurrentValue(courseName, "");
    //       courseName.current.focus();
    //       throw new Error("ชื่อวิชาไม่สามารถขึ้นต้นด้วยตัวเลขได้!");
    //     }
    //   }
  
    //   if (getCurrentValue(courseCode).length < 8) {
    //     setCurrentValue(courseCode, "");
    //     courseCode.current.focus();
    //     throw new Error("รหัสวิชาต้องมีความยาวเท่ากับ 8!");
    //   }
  
    //   if (isNaN(parseInt(getCurrentValue(courseCode)))) {
    //     setCurrentValue(courseCode, "");
    //     courseCode.current.focus();
    //     throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
    //   }
  
    //   let temp: string = getCurrentValue(courseCode);
    //   for (let j: number = 0; j < 8; j++) {
    //     if (isNaN(parseInt(temp[j]))) {
    //       setCurrentValue(courseCode, "");
    //       courseCode.current.focus();
    //       throw new Error("รหัสวิชาต้องเป็นตัวเลขเท่านั้น!");
    //     }
    //   }
  
    //   let isError: boolean = false;
    //   setCourses((prevCourses: Courses | null): Courses | null => {
    //     if (prevCourses === null) {
    //       isError = true;
    //       return prevCourses;
    //     } else if (id === undefined) {
    //       isError = prevCourses.some(
    //         (course: CourseModel): boolean =>
    //           course.courseCode === getCurrentValue(courseCode) ||
    //           course.courseName === getCurrentValue(courseName)
    //       );
    //     } else {
    //       const filterdCourses: Courses = prevCourses.filter(
    //         (course: CourseModel): boolean => course.id !== id
    //       );
    //       isError = filterdCourses.some(
    //         (course: CourseModel) =>
    //           course.courseCode === getCurrentValue(courseCode) ||
    //           course.courseName === getCurrentValue(courseName)
    //       );
    //     }
  
    //     return prevCourses;
    //   });
  
    //   if (isError) {
    //     clear();
    //     throw new Error("ไม่สามารถเพิ่มชื่อวิชาได้!");
    //   }
}