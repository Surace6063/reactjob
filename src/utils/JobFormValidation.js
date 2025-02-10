import * as yup from "yup";

export const JobFormValidationSchema = yup.object({
    type: yup.string().required("Job type is required!"),
    title: yup.string().required("Job title is required!")
        .min(3, "Minimum 3 character is required")
        .max(50, "Cannot exceed 50 charcter.")
})