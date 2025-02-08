import { ref } from "vue";
import { EmailJSResponseStatus, init, send } from "@emailjs/browser"
import { emailjsOptions, emailjsConfigs } from "@/configs";
import { VueCustomHook, UseEmail } from "@/types/hooks";

export default async function useEmail(templateParam: Record<string, any>): Promise<VueCustomHook<UseEmail>> {
    const response = ref<EmailJSResponseStatus | null>(null);
    const isError = ref<boolean>(false);

    init(emailjsOptions);
    const { serviceID, templateID } = emailjsConfigs;

    try {
        const emailjsRes: EmailJSResponseStatus = await send(serviceID, templateID, templateParam, emailjsOptions);
        response.value = emailjsRes
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }

    return { response, isError };
}