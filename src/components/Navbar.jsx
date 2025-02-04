import { BriefcaseBusiness } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="border-b border-gray-200 py-4 bg-white sticky top-0">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
                {/* logo */}
                <div className='flex gap-1 items-center'>
                    <BriefcaseBusiness />
                    <h1 className="text-xl font-bold text-teal-800">
                        React Jobs
                    </h1>
                </div>

                {/* nav links */}
                <ul className="flex gap-4 text-lg font-bold text-slate-800">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Add job</li>
                </ul>

                {/* right */}
                <div className="space-x-2">
                    <button
                        className="py-2 px-4 rounded-md bg-teal-800 text-white">
                        Register
                    </button>
                    <button
                        className="py-2 px-4 rounded-md border">
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Navbar