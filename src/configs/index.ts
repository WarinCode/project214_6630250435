import { getEnv } from "@/utils"
import { EmailJSConfigs, EmailJSOptions } from "@/types"

export const emailjsOptions: EmailJSOptions = {
  publicKey: getEnv("VITE_EMAILJS_PUBLIC_KEY"),
  blockHeadless: true,
  blockList: {
    watchVariable: 'userEmail',
  },
  limitRate: {
    id: 'app',
    throttle: 10000,
  },
}

export const emailjsConfigs: EmailJSConfigs = {
  serviceID: getEnv("VITE_EMAILJS_SERVICE_ID"),
  templateID: getEnv("VITE_EMAILJS_TEMPLATE_ID"),
  options: emailjsOptions
}