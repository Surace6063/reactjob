import * as yup from "yup";

export const JobFormValidationSchema = yup.object({
    type: yup.string().required("Job type is required!"),

    title: yup.string().required("Job title is required!")
        .min(3, "Minimum 3 character is required")
        .max(50, "Cannot exceed 50 charcter."),
    description: yup.string().required("Job description is required!"),

    salary: yup.string().required("Salary range is required!"),

    location: yup.string().required("Location is required!"),

    cName: yup.string().required("Company name is required!"),

    cDescription: yup.string().required("Company description is required!"),

    cEmail: yup.string()
        .required("Contact email is required!")
        .email("Invalid email format!"),

    cPhone: yup.string()
        .optional()
        .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number format!"),
})