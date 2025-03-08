<script setup lang="ts">
import { ref, inject } from "vue";
import { EditUserFormProps } from '@/types/propTypes';
import { VueFinalModal } from 'vue-final-modal';
import axios, { AxiosError, HttpStatusCode } from "axios";
import Swal from "sweetalert2";
import FormContainer from './containers/FormContainer.vue';
import InputField from './InputField.vue';
import ActionButton from './ActionButton.vue';
import Line from "./Line.vue";
import Icon from "./Icon.vue";
import UserModel from "@/types/models/user";
import { UserProviderType, MethodPutResponse } from "@/types";
import { UserRef } from "@/types/models/user";
import { getApiUrl, getUserData, validateUserData, getAxiosConfigs } from "@/utils";

defineProps<EditUserFormProps>();
const { user, fetching } = inject("user") as UserProviderType;
const emit = defineEmits<{
    (e: 'confirm'): void
}>();

const userRef: UserRef = {
    fullname: ref<string>(user.value?.fullname ?? ""),
    studentId: ref<number>(user.value?.studentId ?? 0),
    faculty: ref<string>(user.value?.faculty ?? ""),
    major: ref<string>(user.value?.major ?? "")
}

const handleInput = (key: keyof UserRef, e: Event): void => {
    const { value } = <HTMLInputElement>e.target;

    if (key === "studentId") {
        userRef[key].value = parseInt(value);
    } else {
        userRef[key].value = value;
    }
}

const handleClose = async (): Promise<void> => {
    emit("confirm");
}

const handleEdit = async (): Promise<void> => {
    const payload: UserModel = { ...user.value as UserModel, ...getUserData(userRef) };
    console.log(payload)
    const url: string = getApiUrl() + "/user";

    try {
        validateUserData(payload);
        const { data, status } = await axios.put<MethodPutResponse>(url, payload, getAxiosConfigs());

        if (status === HttpStatusCode.Ok) {
            await fetching<UserModel | null>(url, user);
            await Swal.fire({
                title: "สำเร็จ",
                text: data?.message,
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })
            await handleClose();
            return;
        }
    } catch (err: unknown) {
        if (err instanceof AxiosError || err instanceof Error) {
            Swal.fire({
                title: "เกิดข้อผิดพลาดขึ้น",
                text: err.message,
                icon: "error",
            })
        }
    }
}
</script>

<template>
    <VueFinalModal class="flex justify-center items-center"
        content-class="flex flex-col justify-center mx-4 p-6 bg-primary border rounded-lg w-[700px] space-y-5"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <header class="flex items-center justify-between">
            <span class="text-xl font-k2d text-tertiary">
                {{ title }}
            </span>
            <Icon icon-path="assets/svgs/xmark-solid.svg" classname="w-5 h-5 cursor-pointer" :on-click="handleClose" />
        </header>
        <Line />
        <FormContainer :on-submit="handleEdit"
            classname="grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-x-6 gap-y-8 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center">
            <InputField id="fullname" label-name="ชื่อ" :value="user?.fullname"
                :on-input="(e: Event): void => handleInput('fullname', e)" :attributes="{
                    type: 'text',
                    minlength: 3,
                    maxlength: 30,
                }" classname="w-full" />
            <InputField id="studentId" label-name="รหัสนิสิต" :value="user?.studentId"
                :on-input="(e: Event): void => handleInput('studentId', e)" :attributes="{
                    type: 'text',
                    minlength: 1,
                    maxlength: 10
                }" classname="w-full" />
            <InputField id="faculty" label-name="คณะ" :on-input="(e: Event): void => handleInput('faculty', e)"
                :attributes="{
                    type: 'text',
                    minlength: 1,
                    maxlength: 20,
                }" classname="w-full" :value="user?.faculty" />
            <InputField id="major" label-name="สาขา" :on-input="(e: Event): void => handleInput('major', e)"
                :attributes="{
                    type: 'text',
                    minlength: 1,
                    maxlength: 20,
                }" classname="w-full" :value="user?.major" />
            <ActionButton text="แก้ไข" classname="col-span-2 mt-4 w-[250px] max-[430px]:w-full" type="submit"
                icon-path="assets/svgs/pen-to-square-regular.svg" icon-class-name="h-[18px] w-[18px]" />
        </FormContainer>
    </VueFinalModal>
</template>