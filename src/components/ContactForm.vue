<script setup lang="ts">
import { ref } from "vue";
import Swal from "sweetalert2";
import FormContainer from './containers/FormContainer.vue';
import InputField from './InputField.vue';
import TextAreaField from './TextAreaField.vue';
import ActionButton from './ActionButton.vue';
import { ContactRef, ContactDetails } from '@/types';
import { VueCustomHook, UseEmail } from "@/types/hooks";
import { getContactDetails } from "@/utils";
import useEmail from "@/hooks/useEmail";
import { HttpStatusCode } from "axios";

const contact: ContactRef = {
    senderName: ref<string>(""),
    email: ref<string>(""),
    message: ref<string>(""),
    date: ref<string>("")
}

const clearInputs = (): void => {
    document.querySelector<HTMLInputElement>("#senderName")!.value = "";
    document.querySelector<HTMLInputElement>("#email")!.value = "";
    document.querySelector<HTMLTextAreaElement>("#message")!.value = "";

}

const handleInput = (key: keyof ContactRef, e: Event): void => {
    const { value } = <HTMLInputElement | HTMLTextAreaElement>e.target;
    contact[key].value = value;
}

const handleSendEmail = async (): Promise<void> => {
    contact.date.value = new Date().toLocaleString();
    const contactDetails: ContactDetails = getContactDetails(contact);

    try {
        const { response, isError }: VueCustomHook<UseEmail> = await useEmail(contactDetails);

        if (response.value?.status === HttpStatusCode.Ok || !isError) {
            Swal.fire({
                title: "ส่งอีเมลสำเร็จ",
                icon: "success",
                text: "ส่งข้อมูลติดต่อทางแบบฟอร์มสำเร็จ",
                showConfirmButton: false,
                timer: 2500
            })
            return;
        }

        throw new Error("ส่งข้อมูลไม่สำเร็จ");
    } catch (err: unknown) {
        if (err instanceof Error) {
            Swal.fire({
                title: "เกิดข้อผิเพลาดขึ้น",
                icon: "error",
                text: err.message,
            })
        }
    } finally {
        clearInputs();
    }
}
</script>

<template>
    <FormContainer :on-submit="handleSendEmail"
        classname="grid grid-rows-3 grid-cols-2 font-k2d gap-x-32 gap-y-0 max-[840px]:gap-x-12 max-[430px]:grid-cols-1 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center">
        <InputField id="senderName" labelName="ชื่อ" :on-input="(e: Event): void => handleInput('senderName', e)"
            :attributes="{
                type: 'text',
                maxlength: 50,
                minlength: 2
            }" classname="max-[430px]:mb-4" />
        <InputField id="email" labelName="ที่อยู่อีเมล" :on-input="(e: Event): void => handleInput('email', e)"
            :attributes="{
                type: 'email',
                maxlength: 50,
            }" classname="max-[430px]:mb-4" />
        <TextAreaField id="message" labelName="ข้อความ" classname="w-full -mt-10 max-[430px]:mt-0"
            :on-input="(e: Event): void => handleInput('message', e)" class=" col-span-2" :attributes="{
                maxlength: 200,
                minlength: 10
            }" />
        <ActionButton type="submit" text="ส่ง" icon-path="assets/svgs/paper-plane-solid.svg"
            classname="mt-10 mx-auto col-span-2 w-64 max-[840px]:w-2/4 max-[430px]:w-full" />
    </FormContainer>
</template>