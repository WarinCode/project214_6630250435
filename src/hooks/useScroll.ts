import { ScrollValues } from "@/types";

const useScroll = (): ScrollValues => {
    return { x: window.scrollX, y: window.scrollY };
}

export default useScroll;