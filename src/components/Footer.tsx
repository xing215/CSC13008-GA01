const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-secondary text-sm">
            &copy; 2025. All rights reserved.
          </div>

          {/* Credits */}
          <div className="text-secondary text-sm">
            Design inspired by{" "}
            <a
              href="https://html5up.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              HTML5 UP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
