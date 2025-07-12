export const metadata = {
  title: "About Us ",
  description: "Learn more about MakeAResume Now, our mission, vision, and how we empower job seekers to build the perfect resume with ease.",
  alternates: {
    canonical: 'https://makearesumenow.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About MakeAResume Now</h1>

      <p className="text-gray-700 mb-4">
        At <strong>MakeAResume Now</strong>, our mission is simple: to help you create a winning resume without stress or confusion. 
        We believe every job seeker deserves a resume that truly highlights their skills, experience, and potential.
      </p>

      <p className="text-gray-700 mb-4">
        Founded with the goal of simplifying the job application process, MakeAResume Now offers beautifully designed, professional resume templates that 
        are easy to customize. Whether you’re a recent graduate, a seasoned executive, or changing careers, our tools are built to support you at every step.
      </p>

      <p className="text-gray-700 mb-4">
        We know the job market is competitive and ever-changing. That’s why we stay up to date with the latest hiring trends and resume best practices,
        ensuring our templates and tips help you stand out. With our user-friendly editor, you can build, edit, and download your resume anytime, anywhere.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Vision</h2>
      <p className="text-gray-700 mb-4">
        We envision a world where everyone — regardless of background — has access to the tools they need to secure their dream job. 
        MakeAResume Now is more than just a resume builder; it’s your career partner.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose Us</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>✔️ Modern, ATS-friendly resume templates that recruiters love</li>
        <li>✔️ Easy-to-use editor with real-time preview</li>
        <li>✔️ Download your resume in multiple formats</li>
        <li>✔️ Helpful tips and examples to guide you</li>
        <li>✔️ Secure and private — your data is always protected</li>
      </ul>

      <p className="text-gray-700 mb-4">
        We’re proud to support thousands of job seekers around the world. From your first internship to your next big promotion, we’re here to help you put your best foot forward.
      </p>

      <p className="text-gray-700">
        Ready to craft your perfect resume? <strong>Try MakeAResume Now today</strong> and see how easy it is to create a professional resume that gets results.
      </p>
    </main>
  );
}
