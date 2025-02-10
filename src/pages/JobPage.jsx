import { useState } from "react"
import JobList from "../components/JobList"

const JobPage = () => {
    const [type, setType] = useState('')
    return (
        <div className="max-w-6xl mx-auto px-4 my-10">
            <div className="border-b border-slate-300 pb-6 mb-6">
                <div className="w-[300px]">
                    <label htmlFor="type">Filter By Job Type</label>
                    <select id="type" className="w-[200px] mt-2" onChange={e => setType(e.target.value)}>
                        <option value="">All</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
            </div>
            <JobList type={type} />
        </div >
    )
}
export default JobPage