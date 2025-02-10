import axios from "axios"
import { Banknote, LocateFixed } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const JobList = ({ type }) => {
    const [jobs, setJobs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getJobs = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(type ? `http://localhost:3000/jobs?type=${type}` : 'http://localhost:3000/jobs')
                setJobs(res.data)
            } catch (error) {
                console.log(error);
                setError('Error fetching data!')
            } finally {
                setIsLoading(false)
            }
        }
        getJobs()
    }, [type])

    if (isLoading) return <span>loading...</span>

    if (error) return <span>{error}</span>


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                jobs?.map(job => (
                    <div className="border border-slate-100 rounded-md p-4">
                        <h4 className="text-gray-500">
                            {job.type}
                        </h4>
                        <h3 className="text-xl font-bold truncate text-gray-800">
                            {job.title}
                        </h3>

                        <p className="text-sm text-gray-500 line-clamp-3 my-6">
                            {job.description}
                        </p>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center text-green-700">
                                <Banknote />
                                <span>{job.salary} / year</span>
                            </div>
                            <div className="flex gap-1 items-center text-orange-900">
                                <LocateFixed />
                                <span>{job.location}</span>
                            </div>
                        </div>

                        <div className="border border-slate-200 my-4" />

                        <div className="flex justify-end">
                            <Link to={`/job/${job.id}`}>
                                <button className="py-2 px-4 rounded-md bg-teal-800 text-white">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default JobList