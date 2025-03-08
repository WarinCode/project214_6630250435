import { ref } from "vue";
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import { VueCustomHook, UseAuthenticator } from "@/types/hooks";
import { BearerToken, UserLogin, ActionTypes } from "@/types";
import { getDomain } from "@/utils";
import useLocalStorage from "./useLocalStorage";

const useAuthenticator = (payload: UserLogin): VueCustomHook<UseAuthenticator> => {
    const isPending = ref<boolean>(false);
    const isSuccess = ref<boolean>(false);
    const token = ref<string | null>(null);

    isPending.value = true;
    const { result } = useLocalStorage(ActionTypes.Read, "token");
    
    if(useLocalStorage(ActionTypes.Read, "token").result){
        isPending.value = false;
        isSuccess.value = true;
        token.value = result.value;

        return {
            isPending,
            isSuccess,
            token
        }
    }

    axios.post<BearerToken>(getDomain() + "/login", payload)
        .then(({ status, data }: AxiosResponse<BearerToken>) => {
            if (status === HttpStatusCode.Ok) {
                token.value = data.token;
                isPending.value = false;
                isSuccess.value = true;
            }

            useLocalStorage(ActionTypes.Create, "token", <string>token.value);
        }).catch((err: unknown): void => {
            if (err instanceof Error || err instanceof AxiosError) {
                console.error(err.message);
                isPending.value = true;
                isSuccess.value = false;
            }
        })

    return {
        isPending,
        isSuccess,
        token
    }
}

export default useAuthenticator;