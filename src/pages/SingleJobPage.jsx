import axios from "axios"
import { BanknoteIcon, LocateFixed } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleJobPage = () => {
    const [job, setJob] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const { id } = useParams()

    useEffect(() => {
        const getJobs = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(`http://localhost:3000/jobs/${id}`)
                setJob(res.data)
            } catch (error) {
                console.log(error);
                setError('Error fetching data!')
            } finally {
                setIsLoading(false)
            }
        }
        getJobs()
    }, [])

    if (isLoading) return <span>loading...</span>

    if (error) return <span>{error}</span>

    console.log(job);
    return (
        <div className="max-w-6xl mx-auto my-10 px-2 md:flex gap-20">
            <div className='basis-[60%]'>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Company Info</h1>
                    <h2 className="text-teal-700 mb-2 font-semibold">{job?.company?.name}</h2>
                    <p className="text-gray-700 tracking-wider leading-relaxed text-sm">
                        {job?.company?.description}
                    </p>
                </div>
                <div className="border border-slate-200 my-6" />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Job Info</h1>
                    <span className="text-teal-700 mb-2 font-semibold">{job?.type}</span>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{job?.title}</h2>
                    <p className="text-gray-700 tracking-wider leading-relaxed text-sm">
                        {job?.description}
                    </p>
                    <div className='text-orange-900 mb-3 flex gap-2 items-center text-sm my-4'>
                        <LocateFixed />
                        <span>{job?.location}</span>
                    </div>
                    <div className='mb-2 text-gray-700 flex gap-2 items-center'>
                        <BanknoteIcon />
                        <span>{job?.salary} / Year</span>
                    </div>
                </div>
            </div>

            <div className="border border-slate-200 my-10 md:hidden"></div>

            {/* sidebar */}
            <div className='basis-[40%]'>
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Company Contact Info</h1>
                    <div className="space-y-1">
                        <h3 className="text-slate-800 font-semibold mb-1">Contact Email:</h3>
                        <p className="text-gray-600 text-sm italic">{job?.company?.contactEmail}</p>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-slate-800 font-semibold mb-1">Contact Phone:</h3>
                        <p className="text-gray-600 text-sm italic">{job?.company?.contactPhone}</p>
                    </div>
                </div>
                <div className="my-8 border border-slate-200" />
                <div>
                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                    <button className='mr-2'>
                        Edit Job
                    </button>
                    <button>
                        Delete Job
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SingleJobPage