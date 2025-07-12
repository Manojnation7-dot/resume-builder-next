export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with MakeAResume Now for support, questions, business inquiries, or feedback.',
  alternates: {
    canonical: 'https://makearesumenow.com/contact'
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>

      <p className="mb-4 text-lg text-gray-700">
        We’re here to help! Whether you have questions about building your resume, need technical support, 
        want to share feedback, or wish to collaborate — our team would love to hear from you.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">How to Reach Us</h2>

      <p className="mb-4 text-gray-700">
        📧 <strong>Email:</strong> For general inquiries, support requests, or suggestions, email us at:{' '}
        <a
          href="mailto:makearesumenow@gmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          makearesumenow@gmail.com
        </a>
      </p>

      <p className="mb-4 text-gray-700">
        🕒 <strong>Response Time:</strong> We do our best to reply to all emails within 24–48 hours, Monday through Friday.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Business Inquiries</h2>
      <p className="mb-4 text-gray-700">
        Interested in partnering with <strong>MakeAResume Now</strong>, media opportunities, or collaborations?
        Reach out to us and our team will get back to you as soon as possible.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Connect With Us</h2>
      <p className="mb-4 text-gray-700">
        Stay up to date with resume tips, career advice, and product updates:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>Follow us on LinkedIn (coming soon!)</li>
        <li>Subscribe to our newsletter (coming soon!)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Commitment</h2>
      <p className="text-gray-700">
        We care about your experience. Your feedback helps us improve our resume templates, builder tools, and support. 
        Thank you for choosing <strong>MakeAResume Now</strong> — your trusted partner for creating a professional resume with ease.
      </p>
    </main>
  );
}
