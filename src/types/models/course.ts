import { Ref } from "vue";

export default interface CourseModel {
    id: string;
    courseCode: string;
    courseName: string;
    grade: string;
    credit: number;
}

export type Courses = CourseModel[];

export interface CourseRef {
    id: Ref<string>;
    courseCode: Ref<string>;
    courseName: Ref<string>;
    grade: Ref<string>;
    credit: Ref<number>;
}