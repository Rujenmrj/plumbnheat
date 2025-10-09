export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-secondary-400/40 pb-6">
          <h2 className="text-2xl font-semibold tracking-wide">PlumbNHeat</h2>

          <nav className="flex gap-6 text-gray-200">
            <a href="#" className="hover:text-secondary-300 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-secondary-300 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-secondary-300 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-secondary-300 transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-300">
          <p>&copy; 2025 PlumbNHeat. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-secondary-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
