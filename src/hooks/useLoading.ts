import { ref } from "vue";
import { VueCustomHook, UseLoading } from "@/types/hooks";

const useLoading = (minutes: number): VueCustomHook<UseLoading> => {
    const isLoading = ref<boolean>(true);

    function setIsLoading(): void {
        setTimeout((): void  => {
            isLoading.value = false
        }, minutes * 1000);
    }

    setIsLoading();
    
    return { isLoading, setIsLoading };
}

export default useLoading;