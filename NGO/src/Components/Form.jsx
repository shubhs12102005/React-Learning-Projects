import React from 'react'

const Form = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Join Us</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Your name" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="you@example.com" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full mt-1 p-2 border rounded-md" placeholder="9876543210" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Why do you want to volunteer?</label>
                    <textarea className="w-full mt-1 p-2 border rounded-md" rows="4" placeholder="Share your reason..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form