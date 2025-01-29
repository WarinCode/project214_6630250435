export default interface CourseModel {
    id: string;
    courseCode: string;
    courseName: string;
    grade: string;
    credit: number;
}

export type Courses = CourseModel[];