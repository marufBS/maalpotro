import React from 'react'

const Privacy = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 w-full">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b pb-2">Privacy Policy</h1>
                <p className="text-gray-600 mb-4"><strong>Effective Date:</strong> May 6, 2025</p>
                <div className="space-y-4 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, and information generated through your use of the services, including transaction history and Trust Score data.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
                        <p>We use the collected information to provide and improve our services, to communicate with you, and to enhance the security of our platform.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
                        <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
                        <p>You have the right to access, correct, or delete your personal information. You may also object to certain processing of your information.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes and indicate at the top of the policy when it was last updated.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Company Address</h2>
                        <address className="not-italic ml-4 text-gray-600">
                            BakiTe Headquarters<br />
                            House #117/A, Road #17,<br />
                            CDA Residential Area, Agrabad,<br />
                            Chattogram 4100, Bangladesh
                        </address>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                        <p>Phone: +880 1711 752003</p>
                        <p>Email: support@bakite.com</p>
                        <p>Customer Support Hours: Sunday to Thursday, 9:00 AM – 6:00 PM (BST)</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Privacy