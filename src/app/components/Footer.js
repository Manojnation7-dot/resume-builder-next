export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} MakeAResumenow.com. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
