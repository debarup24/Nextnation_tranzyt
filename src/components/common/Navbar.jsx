import React, { useRef, useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ActionBTN from "../../ui/buttons/ActionBTN";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4  shadow-black/10 shadow-md bg-white backdrop-blur-xl">
      {/* Web view */}
      <Link to={"/"} className="flex items-center gap-2">
        <img src={Logo} alt="brand-logo" />
        <p className="logo-text">Hii developer</p>
      </Link>
      <div className="hidden lg:flex items-center gap-8 text-base text-gray-700 font-medium">
        <p>About Us</p>
        <p>Services</p>
        <p>Case Studies1</p>
        <p>Blogs</p>
        <p>How it works</p>
        <p>Hire</p>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <ActionBTN size="sm" variant="brandMix">
          Contact us
        </ActionBTN>
      </div>
      {/* mobile view */} {/*Cut below 1024 */}
      <button
        ref={buttonRef}
        className="lg:hidden bg-slate-200 p-1.5 rounded-lg text-black/60 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute top-full inset-x-0 bg-gray-50 backdrop-blur-xl shadow-gray-300 shadow-sm flex flex-col gap-4 px-6 py-6 lg:hidden"
        >
          <p onClick={() => setOpen(false)}>About Us</p>
          <p onClick={() => setOpen(false)}>Services</p>
          <p onClick={() => setOpen(false)}>Case Studies1</p>
          <p onClick={() => setOpen(false)}>Blogs</p>
          <p onClick={() => setOpen(false)}>How it works</p>
          <p onClick={() => setOpen(false)}>Hire</p>

          <ActionBTN
            size="sm"
            variant="brandMix"
            onClick={() => setOpen(false)}
          >
            Contact us
          </ActionBTN>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
