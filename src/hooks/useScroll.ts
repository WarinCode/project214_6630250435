import { VueCustomHook, UseScroll } from "@/types/hooks";

const useScroll = (): VueCustomHook<UseScroll> => {
    return { x: window.scrollX, y: window.scrollY };
}

export default useScroll;