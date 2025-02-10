const Form = () => {
    return (
        <div className="my-10 max-w-xl mx-auto px-4 border border-slate-300 p-4 rounded-md">
            <h1 className="text-center text-2xl font-bold text-teal-600 mb-10">Add Job</h1>
            <form className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="type">Job Type</label>
                    <select id="type">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="title">Job Title</label>
                    <input type="text" id="title" placeholder="Add job title" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="4" placeholder="Add any job duties, expectations, requirements, etc"></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="salary">Salary</label>
                    <select id="salary">
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
                    <input type="text" id="location" placeholder="Company Location" />
                </div>

                <h3 className="border-y border-gray-400 py-4 font-semibold text-xl text-slate-700">Company Info</h3>

                <div className="space-y-2">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" placeholder="Company Name" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="company_description">Company Description</label>
                    <textarea id="company_description" rows="4" placeholder="What does your company do?"></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact_email">Contact Email</label>
                    <input type="email" id="contact_email" placeholder="Email address for applicants" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact_phone">Contact Phone</label>
                    <input type="tel" id="contact_phone" placeholder="Optional phone for applicants" />
                </div>

                <button className="w-full bg-teal-600 text-white py-2 rounded-md">Submit</button>
            </form>
        </div>

    )
}
export default Form