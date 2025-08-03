import React from 'react'

const HeroSection = () => {
    return (
        <>
            {/* Banner */}
            <div className='mt-2'>
                <img src="/ngo_banner.jpg" alt="" />
            </div>

            {/* Mission */}
            <div className='mt-2 text-center max-w-6xl mx-auto'>
                <h1 className='text-2xl font-semibold '>Our Mission</h1>
                <p className='mt-2 text-[18px]'>At Udaan Foundation, our mission is to empower underprivileged individuals—especially children and women—by providing access to education, healthcare, and skill development.We aim to create equal opportunities so every person has the chance to rise, grow, and live with dignity.</p>
            </div>

            {/* Campaigns */}
            <div className='mt-4 text-center w-full'>
                <h1 className='text-2xl font-semibold'>Campaigns</h1>
                <div className='flex items-center justify-center gap-4 mt-2 flex-wrap'>
                    <img className='h-64 w-80 object-cover rounded-lg' src="/ngo1.webp" alt="Event 1" />
                    <img className='h-64 w-80 object-cover rounded-lg' src="/ngo2.webp" alt="Event 2" />
                    <img className='h-64 w-80 object-cover rounded-lg' src="/ngo3.jpeg" alt="Event 2" />
                    <img className='h-64 w-80 object-cover rounded-lg' src="/ngo4.jpeg" alt="Event 3" />
                </div>
            </div>

            {/* Some info & donate form */}
            <div className="md:flex items-start justify-center gap-8 mt-8 px-4">
                {/* Left: Content Section */}
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-3xl font-bold leading-tight">
                        Join Us in Creating a Brighter, Educated Tomorrow
                    </h1>
                    <p className="text-lg text-gray-700">
                        At <strong>Udaan Foundation</strong>, we believe that no child should have to choose between hunger and education.
                        With your support, we aim to provide <strong>nourishing mid-day meals</strong> to underprivileged children—helping
                        them stay healthy, focused, and in school.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">Why Your Support Matters</h2>
                    <p className="text-gray-700">
                        Millions of children still struggle to access proper nutrition. Many come to school hungry, making it harder
                        for them to learn or attend regularly. <strong>Your donation can change that.</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Boost school attendance and learning outcomes</li>
                        <li>Break the cycle of hunger and poverty</li>
                        <li>Fuel young minds with wholesome meals</li>
                        <li>Support health and education together</li>
                    </ul>

                    <p className="font-semibold text-blue-600">Nourish Dreams. Empower Education.</p>

                    <h2 className="text-2xl font-semibold mt-6">Why Udaan Foundation?</h2>
                    <p className="text-gray-700">
                        With a strong commitment to transparency, trust, and community impact, Udaan Foundation is working
                        tirelessly to build a future where every child has the nutrition and support they need to thrive in school
                        and beyond.
                    </p>
                    <p className="text-gray-700">A mission driven by people like you. A future built by the children we serve.</p>

                    <p className="mt-4 font-medium text-green-700">
                        Every Meal Counts. Every Child Matters. <br />
                        Support mid-day meals. Make a lasting impact.
                    </p>
                </div>

                {/* Right: Donation Form */}
                <div className="w-full max-w-md mt-10 md:mt-0 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2 text-center">Transform the Lives of Children</h2>
                    <h3 className="text-xl font-medium mb-4 text-center text-blue-600">Donate Now</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Donation Amount (INR)</label>
                            <input
                                type="number"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="100"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Payment Method</label>
                            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option>UPI</option>
                                <option>Credit Card</option>
                                <option>Debit Card</option>
                                <option>Net Banking</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Donate
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HeroSection