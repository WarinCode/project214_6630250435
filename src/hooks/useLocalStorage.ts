import { ref } from "vue";
import { VueCustomHook, UseLocalStorage } from "@/types/hooks";
import { ActionTypes } from "@/types";

const useLocalStorage = (action: ActionTypes, key: string, value?: string): VueCustomHook<UseLocalStorage> => {
    const result = ref<string | null>(null);
    const isCreated = ref<boolean>(false);
    const isUpdated = ref<boolean>(false);
    const isDeleted = ref<boolean>(false);
    
    switch (action) {
        case ActionTypes.Create:
            if (key && value) {
                localStorage.setItem(key, value);
                isCreated.value = true;
            }
            break;
        case ActionTypes.Read:
            if (key) {
                result.value = localStorage.getItem(key);
            } else {
                result.value = null;
            }
            break;
        case ActionTypes.Update:
            if (key && value) {
                localStorage.setItem(key, value);
                isUpdated.value = true;
            }
            break;
        case ActionTypes.Delete:
            if (key) {
                localStorage.removeItem(key);
                isDeleted.value = true;
            }
            break;
    }

    return { result, isCreated, isUpdated, isDeleted };
}

export default useLocalStorage;