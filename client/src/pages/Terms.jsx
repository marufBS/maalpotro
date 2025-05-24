import React from 'react'

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 w-full">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b pb-2">Terms of Service (ToS)</h1>
        <p className="text-gray-600 mb-4"><strong>Effective Date:</strong> May 6, 2025</p>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using BakiTe's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Description of Service</h2>
            <p>BakiTe provides a platform that enables shopkeepers and customers to manage credit transactions digitally, including features like Trust Scores, payment tracking, and communication tools.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users agree to provide accurate information and to use the platform in compliance with applicable laws.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Trust Score System</h2>
            <p>BakiTe assigns Trust Scores based on user behavior, including payment timeliness, transaction frequency, and shopkeeper reviews. The Trust Score is intended to foster trust within the community and is subject to change based on user activity.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Modifications to Terms</h2>
            <p>BakiTe reserves the right to modify these Terms of Service at any time. Continued use of the services after any such changes shall constitute your consent to such changes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
            <p>BakiTe may suspend or terminate your access to the services at any time, without notice, for conduct that violates these Terms of Service or is otherwise harmful to other users or the company.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms