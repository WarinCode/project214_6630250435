import { Ref } from "vue";
import { EmailJSResponseStatus } from "@emailjs/browser";

export type VueCustomHook<T> = T;

export interface UseScroll {
    x: number;
    y: number;
}

export interface UseLoading {
    isLoading: Ref<boolean>;
    setIsLoading: () => void
}

export interface UseEmail {
    response: Ref<EmailJSResponseStatus | null>,
    isError: Ref<boolean>
}

export type UseFetch = Promise<void>;
export type UseFetchAll = UseFetch;