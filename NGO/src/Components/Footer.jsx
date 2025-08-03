import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-10 mt-12">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Udaan Foundation</h3>
                        <p className="text-sm text-gray-300">
                            Where every child’s journey begins with a Udaan                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul className="text-sm space-y-1">
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="/volunteer" className="hover:text-blue-400">Volunteer</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm text-gray-300">
                            📍 123 Hope Street, Hyderabad, India<br />
                            📞 +91-98765-43210<br />
                            📧 contact@udaanfoundation.org
                        </p>
                    </div>

                   
                </div>

                <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                    © 2025 Udaan Foundation. All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer