const Footer = () => {
  return (
    <footer className="border-t border-slate-500 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs mt-12">
      <span
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="font-bold text-gray-600 text-sm"
      >
        Assignment
      </span>
      <span>©️ {new Date().getFullYear()} Debarup | !All rights reserved.</span>
      <div className="flex gap-5">
        {["Privacy", "Terms", "Contact", "Socials"].map((i) => (
          <a key={i} href="#" className="hover:text-gray-500 transition-colors">
            {i}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
