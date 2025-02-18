import { Ref } from "vue";
import useFetch from "./useFetch";
import { VueCustomHook, UseFetchAll } from "@/types/hooks";

const useFetchAll = async <T = any>(urls: string[], refs: Ref<T>[]): VueCustomHook<UseFetchAll> => {
    if (!urls.length || !refs.length) throw new Error("ไม่มีการส่งข้อมูลใดๆให้ parameters!");
    if (urls.length !== refs.length) throw new Error("ขนาดของข้อมูล array ไม่เท่ากัน!");

    for (let i: number = 0; i < urls.length; i++) {
        await useFetch<T>(urls[i], refs[i]);
    }
}

export default useFetchAll;