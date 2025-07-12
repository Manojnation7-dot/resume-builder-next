export const metadata = {
  title: 'Privacy Policy | MakeAResume',
  description:
    'Read the MakeAResume Privacy Policy to learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://makearesumenow.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-6">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: July 12, 2025</p>
        </header>

        <article className="prose prose-blue max-w-none">
          <p>
            At <strong>MakeAResume.com</strong>, accessible from{' '}
            <a href="https://makearesumenow.com" className="text-blue-600 underline">
              https://makearesumenow.com
            </a>, your privacy is important to us. This Privacy Policy explains what
            information we collect, how we use it, and your rights.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>a) Personal Information</h3>
          <p>When you use our service to create a resume, we may collect personal details you provide, such as:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Contact information (address, phone)</li>
            <li>Employment and education history</li>
          </ul>

          <h3>b) Usage Data</h3>
          <p>We may automatically collect information when you visit our site:</p>
          <ul>
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>

          <h3>c) Cookies</h3>
          <p>
            We use cookies and similar tracking technologies to improve your experience.
            You can disable cookies through your browser settings.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and operate the resume builder service</li>
            <li>Generate downloadable resumes (PDFs, etc.)</li>
            <li>Improve our website and user experience</li>
            <li>Communicate with you (e.g., respond to inquiries)</li>
            <li>Send optional promotional emails (if you consent)</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We do <strong>not</strong> sell your personal data. We may share data with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted partners who help us run the website
              (e.g., hosting, analytics).
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information if required by law.
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide the service and
            for legal obligations.
          </p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href="mailto:makearesumenow@gmail.com" className="text-blue-600 underline">
              makearesumenow@gmail.com
            </a>.
          </p>

          <h2>6. Security</h2>
          <p>
            We use reasonable security measures to protect your data. However, no online system
            is 100% secure.
          </p>

          <h2>7. Links to Other Websites</h2>
          <p>
            Our site may contain links to other websites. We are not responsible for their content
            or privacy practices.
          </p>

          <h2>8. Children’s Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect
            information from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. Changes will be posted on this page with a new “Last
            updated” date.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>
            📧{' '}
            <a href="mailto:makearesumenow@gmail.com" className="text-blue-600 underline">
              makearesumenow@gmail.com
            </a>
          </p>

          <p>
            <strong>MakeAResumenow.com</strong>
            <br />
            <a href="https://makearesumenow.com" className="text-blue-600 underline">
              https://makearesumenow.com
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}