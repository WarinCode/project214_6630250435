import axios, { AxiosResponse } from "axios";
import { CRUD, ServerTypes } from "@/types";
import CourseModel, { Courses } from "@/types/models/course";

export default class ServerAdapter<T = Courses> implements CRUD<T> {
    private apiUrl: string = "https://server-for-react-portfolio.onrender.com";

    private convert = (data: ServerTypes.Course[]): Courses => {
        return data.map((item: ServerTypes.Course): CourseModel => {
            return {
                id: String(item.id),
                courseCode: item.courseCode,
                courseName: item.courseName,
                grade: item.grade,
                credit: item.credit
            }
        })
    }

    public get = async (endpoint: string): Promise<AxiosResponse<T>> => {
        if (endpoint.endsWith("courses")) {
            let res = await axios.get<ServerTypes.Course[]>(this.apiUrl + endpoint);
            data: this.convert(res.data);
            // return { ...res } ;
        }
        return await axios.get(endpoint);
    }

    public post = async (endpoint: string, payload: T): Promise<AxiosResponse<T>> => {
        return await axios.post(endpoint, payload);
    }

    public update = async (endpoint: string, payload: T): Promise<AxiosResponse<T>> => {
        return await axios.put(endpoint, payload);
    }

    public delete = async (endpoint: string): Promise<AxiosResponse<T>> => {
        return await axios.delete(endpoint);
    }
}