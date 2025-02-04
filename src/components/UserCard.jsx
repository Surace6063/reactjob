const UserCard = () => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4 shadow-md">
                <h1 className="text-lg font-semibold text-gray-800 mb-1">
                    For Developers
                </h1>
                <p className="text-gray-700 mb-4">
                    Browser our react job and start your carrer today
                </p>
                <button
                    className="py-2 px-4 rounded-md bg-teal-800 text-white">
                    Browse Jobs
                </button>
            </div>

            <div className="border border-gray-200 rounded-md p-4 bg-slate-100 shadow-md">
                <h1 className="text-lg font-semibold text-gray-800 mb-1">
                    For Employers
                </h1>
                <p className="text-gray-700 mb-4">
                    List your job to find perfect developer for the role.
                </p>
                <button
                    className="py-2 px-4 rounded-md bg-teal-800 text-white">
                    Add Jobs
                </button>
            </div>
        </div>
    )
}
export default UserCard