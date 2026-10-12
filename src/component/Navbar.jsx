"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import instituteLogo from "/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const LOGIN_PATH =
  "/loginportalisherefjdfjdklfjdklfjasklfjasfjuw49ru0wr4jowrjeofjfkdjf0eu034uj4ue9rtuej8gerhgnrghrgnersghergnoesghesgo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile drawer whenever the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contactSection" },
  ];

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const coursesData = [
  {
    name: "Basic Computer",
    path: "/courses/basic-computer",
    image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg",
    description: "Fundamentals of computer operations and software tools",
    duration: "3 months",
    level: "Beginner"
  },
  {
    name: "Graphic Designing",
    path: "/courses/graphic-designing",
    image: "https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg",
    description: "Photoshop, Corel Draw, InDesign, Illustrator",
    duration: "5 months",
    level: "Intermediate"
  },
  {
    name: "Web Designing",
    path: "/courses/web-designing",
    image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg",
    description: "HTML, DHTML, CSS, JavaScript, Core Python",
    duration: "5 months",
    level: "Intermediate"
  },
  {
    name: "Web Development",
    path: "/courses/web-development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    description: "HTML, CSS, JavaScript, React, Node.js, Database",
    duration: "6 months",
    level: "Intermediate"
  },
  {
    name: "CAAD",
    path: "/courses/caad",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    description: "Certificate in Advanced Accounting & Designing",
    duration: "10 months",
    level: "Advanced"
  },
  {
    name: "CCA",
    path: "/courses/cca",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
    description: "Certificate in Computer Accounting",
    duration: "6 months",
    level: "Beginner"
  },
  {
    name: "ACA",
    path: "/courses/aca",
    image: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg",
    description: "Advanced Certificate in Accounting",
    duration: "8 months",
    level: "Intermediate"
  },
  {
    name: "ADCA",
    path: "/courses/adca",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
    description: "Advanced Diploma in Computer Application",
    duration: "12 months",
    level: "Advanced"
  },
  {
    name: "Digital Marketing",
    path: "/courses/digital-marketing",
    image: "https://images.pexels.com/photos/4134784/pexels-photo-4134784.jpeg",
    description: "SEO, SMO, Content Marketing, PPC Advertising",
    duration: "4 months",
    level: "Intermediate"
  },
  {
    name: "Python",
    path: "/courses/python",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    description: "Core Python programming concepts",
    duration: "4 months",
    level: "Intermediate"
  },
  {
    name: "Advanced Excel",
    path: "/courses/advanced-excel",
    image: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg",
    description: "Pivot Tables, Dashboards, Advanced Formulas",
    duration: "1 month",
    level: "Advanced"
  },
  {
    name: "Busy",
    path: "/courses/busy",
    image: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg",
    description: "Busy Accounting Software training",
    duration: "1 month",
    level: "Intermediate"
  },
  {
    name: "Tally Prime",
    path: "/courses/tally-prime",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    description: "Tally Prime with GST features",
    duration: "3 months",
    level: "Intermediate"
  },
  {
    name: "CCC",
    path: "/courses/ccc",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    description: "Course on Computer Concept",
    duration: "4 months",
    level: "Beginner"
  }
];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-[#05031F] via-[#0C0950] to-[#3A36DB] text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:text-sm">
          <p className="truncate">
            <span className="mr-2 rounded bg-[#F5B301] px-1.5 py-0.5 text-[10px] font-bold text-[#0C0950] sm:text-xs">
              NEW
            </span>
            Enroll Now for Summer Batch 2026 - Limited Seats Available!
          </p>
          <a
            href="tel:8860448368"
            className="ml-4 hidden shrink-0 items-center gap-2 text-white/90 hover:text-[#F5B301] sm:flex"
          >
            <FaPhoneAlt className="text-[11px]" />
            88604 48368
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-[#0C0950]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={instituteLogo} alt="ARC Computer Institute logo" className="h-14 w-auto" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-[#0C0950]">ARC Computer Institute</h1>
              <p className="text-xs font-medium text-[#3A36DB]">Innovate • Code • Succeed</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden h-full items-stretch gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const linkClass = `relative flex items-center px-4 text-sm font-semibold transition-colors duration-200 ${
                active ? "text-[#3A36DB]" : "text-[#0C0950] hover:text-[#3A36DB]"
              }`;
              const indicator = (
                <span
                  className={`absolute inset-x-4 bottom-0 h-[3px] rounded-t-full bg-[#F5B301] transition-transform duration-300 origin-center ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              );

              if (link.name === "Courses") {
                return (
                  <div key={link.name} className="group flex items-stretch">
                    <Link to={link.path} className={linkClass}>
                      {link.name}
                      <svg className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      {indicator}
                    </Link>

                    {/* Courses mega menu (anchored to the full-width navbar) */}
                    <div className="absolute left-0 right-0 top-full hidden border-t-4 border-[#F5B301] bg-white p-6 shadow-2xl group-hover:block">
                      <div className="mx-auto max-w-7xl">
                        <div className="mb-4 flex items-end justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-[#0C0950]">Our Courses</h3>
                            <p className="text-sm text-gray-600">Choose from our comprehensive range of technology courses</p>
                          </div>
                          <Link to="/courses" className="rounded-md bg-[#0C0950] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3A36DB]">
                            View All Courses
                          </Link>
                        </div>
                        <div className="grid max-h-96 grid-cols-4 gap-4 overflow-y-auto">
                          {coursesData.map((course) => (
                            <Link to={course.path} key={course.name} className="group/course rounded-lg border border-gray-100 bg-[#F7F6FF] p-3 transition-all duration-200 hover:border-[#3A36DB]/40 hover:bg-[#EDEBFF]">
                              <img src={course.image} alt={course.name} className="mb-3 h-24 w-full rounded-md object-cover" />
                              <h4 className="mb-1 text-sm font-semibold text-[#0C0950] group-hover/course:text-[#3A36DB]">{course.name}</h4>
                              <p className="mb-2 line-clamp-2 text-xs text-gray-600">{course.description}</p>
                              <div className="flex items-center justify-between text-xs">
                                <span className="rounded-full bg-[#3A36DB]/10 px-2 py-1 font-medium text-[#3A36DB]">{course.duration}</span>
                                <span className="text-gray-500">{course.level}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.name} className="group flex items-stretch">
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                    {indicator}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contactSection"
              className="rounded-md bg-[#F5B301] px-4 py-2 text-sm font-bold text-[#0C0950] shadow-sm transition-all duration-200 hover:bg-[#ffc933] hover:shadow-md"
            >
              Enquire Now
            </Link>
            <Link
              to={LOGIN_PATH}
              className="flex items-center rounded-md bg-gradient-to-r from-[#0C0950] to-[#3A36DB] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Student Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-[#0C0950] p-2 text-white md:hidden"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-gradient-to-b from-[#0C0950] to-[#05031F] text-white shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <img src={instituteLogo} alt="" className="h-10 w-auto rounded" />
                  <span className="text-sm font-semibold">ARC Computer Institute</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-white/10" aria-label="Close menu">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-white/10 text-[#F5B301]"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-3 p-4">
                <Link to="/contactSection" className="block rounded-lg bg-[#F5B301] px-4 py-3 text-center font-bold text-[#0C0950]">
                  Enquire Now
                </Link>
                <Link to={LOGIN_PATH} className="block rounded-lg border border-white/30 px-4 py-3 text-center font-semibold text-white hover:bg-white/10">
                  Student Login
                </Link>
                <a href="tel:8860448368" className="block text-center text-sm text-white/70">
                  Call 88604 48368
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
