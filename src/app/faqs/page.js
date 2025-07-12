export const metadata = {
  title: "FAQs ",
  description: "Frequently asked questions about how to use ResumeCraft Pro to build your perfect resume.",
  alternates: {
    canonical: 'https://makearesumenow.com/faqs'
  }
};

const faqs = [
  {
    question: "Is MakeAResume free to use?",
    answer:
      "Yes! Our basic templates are completely free to use. You can generate and download your resume as a PDF anytime."
  },
  {
    question: "Can I customize my resume after downloading?",
    answer:
      "You can always return and edit your resume on our site and download an updated version whenever you need."
  },
  {
    question: "Do you store my data?",
    answer:
      "We do not store your data permanently. Your resume information stays in your browser while you work."
  },
  {
    question: "How can I get support?",
    answer:
      "If you have any questions or need help, please reach out to our support team at makearesumenow@gmail.com."
  },
];

export default function FAQsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
