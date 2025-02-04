import JobList from "../components/JobList"
import UserCard from "../components/UserCard"

const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto px-2 my-10">
            {/* hero section */}
            <div className="bg-slate-800 h-60 md:h-72 rounded-md flex justify-center items-center">
                <div>
                    <h1 className="text-2xl md:text-4xl text-white font-bold">
                        Find your
                        <span className="text-green-500 mx-1">
                            dream react job
                        </span>
                        with React Job.
                    </h1>
                    <p className="text-white tracking-wide mt-2 text-center">
                        Connect with top companies hiring react js developer.
                    </p>
                </div>
            </div>

            {/* user type card section */}
            <UserCard />

            {/* job lists */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    Recent Jobs
                </h2>
                <JobList />
            </div>
        </div>
    )
}
export default HomePage