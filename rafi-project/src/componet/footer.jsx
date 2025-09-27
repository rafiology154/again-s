import React from 'react';

// কম্পোনেন্ট ফাংশন শুরু
const AppFooter = () => {
    return (
        // সমস্ত ক্লাসকে className দিয়ে প্রতিস্থাপন করা হয়েছে
        <footer className="bg-black text-gray-300">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12">

                    {/* 1. CS — Ticket System (Logo/Description) */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">CS — Ticket System</h3>
                        <p className="text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                        </p>
                    </div>

                    {/* 2. Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-150">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* বাকি কলামগুলি... */}

                    {/* 5. Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">[in]</span> @CS — Ticket System
                            </a></li>
                            <li><a href="mailto:support@cst.com" className="hover:text-white transition duration-150 flex items-center">
                                <span className="mr-2">&#9993;</span> support@cst.com
                            </a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 text-center text-sm text-gray-500">
                    &copy; 2025 CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
// কম্পোনেন্ট এক্সপোর্ট করা আবশ্যক
export default AppFooter;