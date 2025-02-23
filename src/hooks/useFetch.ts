import { Ref } from "vue";
import axios, { AxiosResponse, HttpStatusCode, AxiosError } from "axios";
import { VueCustomHook, UseFetch } from "@/types/hooks";
import { getAxiosConfigs } from "@/utils";

const useFetch = async <T = any>(url: string, ref: Ref<T>): VueCustomHook<UseFetch> => {
    try {
        const { status, data }: AxiosResponse<T> = await axios.get<T>(url, getAxiosConfigs());

        if (status === HttpStatusCode.Ok) {
            ref.value = data;
            return;
        }

        throw new Error("Something went wrong!");
    } catch (e: unknown) {
        if (e instanceof AxiosError) {
            console.error(e.message);
        }
    }
}

export default useFetch;