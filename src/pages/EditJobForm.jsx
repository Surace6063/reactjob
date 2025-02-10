import axios from "axios"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import { JobFormValidationSchema } from "../utils/JobFormValidation";
import toast from "react-hot-toast";

const EditJobForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const job = location?.state?.job

    const { register, handleSubmit, formState: {
        errors, isSubmitting
    } } = useForm({
        resolver: yupResolver(JobFormValidationSchema),
        defaultValues: {
            type: job?.type || "",
            title: job?.title || "",
            description: job?.description || "",
            salary: job?.salary || "",
            location: job?.location || "",
            cName: job?.company?.name || "",
            cDescription: job?.company?.description || "",
            cEmail: job?.company?.contactEmail || "",
            cPhone: job?.company?.contactPhone || "",
        }
    })




    const onSubmit = async (data) => {
        const formData = {
            type: data.type,
            title: data.title,
            description: data.description,
            salary: data.salary,
            location: data.location,
            company: {
                name: data.cName,
                description: data.cDescription,
                contactEmail: data.cEmail,
                contactPhone: data.cPhone
            }

        }
        try {
            await axios.
                put(`http://localhost:3000/jobs/${job?.id}`, formData)
            toast.success("Job updated successfully!")
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="my-10 max-w-xl mx-auto px-4 border border-slate-300 p-4 rounded-md">
            <h1 className="text-center text-2xl font-bold text-teal-600 mb-10">Update Job</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="type">Job Type</label>
                    <select {...register('type')} id="type">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                    {errors.type &&
                        <p className="text-red-700 text-sm">
                            {errors.type.message}
                        </p>
                    }
                </div>

                <div className="space-y-2">
                    <label htmlFor="title">Job Title</label>
                    <input {...register('title')} type="text" id="title" placeholder="Add job title" />
                    {errors.title &&
                        <p className="text-red-700 text-sm">
                            {errors.title.message}
                        </p>
                    }
                </div>

                <div className="space-y-2">
                    <label htmlFor="description">Description</label>
                    <textarea {...register('description')} id="description" rows="4" placeholder="Add any job duties, expectations, requirements, etc"></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="salary">Salary</label>
                    <select {...register('salary')} id="salary">
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50K - 60K">$50K - $60K</option>
                        <option value="$60K - 70K">$60K - $70K</option>
                        <option value="$70K - 80K">$70K - $80K</option>
                        <option value="$80K - 90K">$80K - $90K</option>
                        <option value="$90K - 100K">$90K - $100K</option>
                        <option value="$100K - 125K">$100K - $125K</option>
                        <option value="$125K - 150K">$125K - $150K</option>
                        <option value="$150K - 175K">$150K - $175K</option>
                        <option value="$175K - 200K">$175K - $200K</option>
                        <option value="Over $200K">Over $200K</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="location">Location</label>
                    <input {...register('location')} type="text" id="location" placeholder="Company Location" />
                </div>

                <h3 className="border-y border-gray-400 py-4 font-semibold text-xl text-slate-700">Company Info</h3>

                <div className="space-y-2">
                    <label htmlFor="company">Company Name</label>
                    <input {...register('cName')} type="text" id="company" placeholder="Company Name" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="company_description">Company Description</label>
                    <textarea {...register('cDescription')} id="company_description" rows="4" placeholder="What does your company do?"></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact_email">Contact Email</label>
                    <input {...register('cEmail')} type="email" id="contact_email" placeholder="Email address for applicants" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact_phone">Contact Phone</label>
                    <input {...register('cPhone')} type="tel" id="contact_phone" placeholder="Optional phone for applicants" />
                </div>

                <button
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 text-white py-2 rounded-md">
                    {
                        isSubmitting ? 'submitting...' : 'Update'
                    }
                </button>
            </form>
        </div>
    )
}
export default EditJobForm