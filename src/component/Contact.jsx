import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaDirections,
  FaCheckCircle,
} from "react-icons/fa";
import AuroraBackground from "./effects/AuroraBackground";

const FORM_ENDPOINT = "https://formspree.io/f/mrbknydz";

const BRANCHES = [
  {
    id: "mukund-pur",
    name: "Mukund Pur Campus",
    address: ["A-14 Main Road, Mukund Pur", "Delhi - 110042", "(Above Bank of Baroda)"],
    directions:
      "https://www.google.com/maps/search/?api=1&query=ARC+Computer+Institute+Mukund+Pur+Delhi",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27987.6388298926!2d77.14508414268492!3d28.735833565847276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01e2dbe74961%3A0xc6675065faefee09!2sARC%20Computer%20Institute%20Delhi%20-%20ADCA%2C%20Graphic%20Designing%2C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1750695810305!5m2!1sen!2sin",
  },
  {
    id: "burari",
    name: "Burari Campus",
    address: ["25 Futa Road, Near AAP Party Office", "West Kamal Vihar, Burari", "Delhi - 110084"],
    directions:
      "https://www.google.com/maps/search/?api=1&query=ARC+Computer+Institute+Burari+Delhi",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6996.164817610668!2d77.1806340433275!3d28.746956402409527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d010d1a281ef7%3A0x3258df00be1868e1!2sARC%20Computer%20Institute%20Burari!5e0!3m2!1sen!2sin!4v1750695592525!5m2!1sen!2sin",
  },
];

const COURSES = [
  ["basic-computer", "Basic Computer"],
  ["graphic-designing", "Graphic Designing"],
  ["web-designing", "Web Designing"],
  ["web-development", "Web Development"],
  ["caad", "CAAD"],
  ["cca", "CCA"],
  ["aca", "ACA"],
  ["adca", "ADCA"],
  ["digital-marketing", "Digital Marketing"],
  ["python", "Python"],
  ["advanced-excel", "Advanced Excel"],
  ["busy", "Busy"],
  ["tally-prime", "Tally Prime"],
  ["ccc", "CCC"],
];

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-[#3A36DB] focus:outline-none focus:ring-2 focus:ring-[#3A36DB]/30";

export function ContactSection() {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0].id);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const branch = BRANCHES.find((b) => b.id === activeBranch);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#F7F6FF]">
      {/* Header band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#05031F] via-[#0C0950] to-[#1d1a8f] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <AuroraBackground />
        <motion.div
          className="relative z-10 mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 h-1 w-14 rounded-full bg-[#F5B301]" />
          <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
            Talk to ARC Computer Institute
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Ask about courses, fees, batch timings or placement support. Call us, message us on
            WhatsApp, or visit either campus. We reply within one working day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:8860448368"
              className="inline-flex items-center gap-2 rounded-md bg-[#F5B301] px-5 py-3 font-semibold text-[#0C0950] transition hover:bg-[#ffc933]"
            >
              <FaPhoneAlt /> Call 88604 48368
            </a>
            <a
              href="https://wa.me/918586919186"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <FaWhatsapp /> WhatsApp us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Quick info row */}
        <div className="-mt-20 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              body: (
                <a href="tel:8860448368" className="hover:text-[#3A36DB]">
                  88604 48368
                </a>
              ),
            },
            {
              icon: <FaWhatsapp />,
              title: "WhatsApp",
              body: (
                <a
                  href="https://wa.me/918586919186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3A36DB]"
                >
                  85869 19186
                </a>
              ),
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              body: (
                <a href="mailto:sefdel333@gmail.com" className="break-all hover:text-[#3A36DB]">
                  sefdel333@gmail.com
                </a>
              ),
            },
            {
              icon: <FaClock />,
              title: "Hours",
              body: (
                <>
                  Mon - Sat: 8:00 AM - 8:00 PM
                  <br />
                  Sunday: Closed
                </>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border-t-4 border-[#3A36DB] bg-white p-5 shadow-lg shadow-[#0C0950]/10"
            >
              <div className="rounded-lg bg-[#F1F0FF] p-3 text-lg text-[#3A36DB]">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-[#0C0950]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#0C0950]/10 lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="bg-gradient-to-r from-[#0C0950] to-[#3A36DB] px-6 py-5 sm:px-8">
              <h3 className="text-xl font-bold text-white">Send an enquiry</h3>
              <p className="mt-1 text-sm text-white/80">
                Tell us what you want to learn and we will call you back.
              </p>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center px-6 py-16 text-center sm:px-8" role="status">
                <FaCheckCircle className="mb-4 text-5xl text-green-600" />
                <h4 className="text-xl font-bold text-[#0C0950]">Enquiry received</h4>
                <p className="mt-2 max-w-sm text-gray-600">
                  Thank you. Our team will contact you on the phone number or email you gave us.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-md border border-[#0C0950] px-5 py-2 font-semibold text-[#0C0950] hover:bg-[#F1F0FF]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
                <input type="hidden" name="_subject" value="New enquiry from arcinstitute.in" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+91" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email address <span className="text-gray-400">(optional)</span>
                  </label>
                  <input id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="course" className="mb-1 block text-sm font-medium text-gray-700">
                      Course
                    </label>
                    <select id="course" name="course" className={inputClass} defaultValue="">
                      <option value="">Select a course</option>
                      {COURSES.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="branch" className="mb-1 block text-sm font-medium text-gray-700">
                      Preferred campus
                    </label>
                    <select id="branch" name="branch" className={inputClass} defaultValue="">
                      <option value="">No preference</option>
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={inputClass}
                    placeholder="Questions about fees, batch timings, or anything else"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    We could not send your enquiry. Please try again, or call 88604 48368.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-[#0C0950] py-3 font-semibold text-white shadow-md transition hover:bg-[#3A36DB] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Campuses */}
          <motion.div
            className="space-y-5 lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#0C0950]/10">
              <div className="flex" role="tablist" aria-label="Campus">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    role="tab"
                    aria-selected={activeBranch === b.id}
                    onClick={() => setActiveBranch(b.id)}
                    className={`flex-1 px-4 py-3 text-sm font-semibold transition ${
                      activeBranch === b.id
                        ? "bg-[#0C0950] text-white"
                        : "bg-[#F1F0FF] text-[#0C0950] hover:bg-[#E4E2FF]"
                    }`}
                  >
                    {b.name.replace(" Campus", "")}
                  </button>
                ))}
              </div>

              <iframe
                key={branch.id}
                src={branch.map}
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.name} map`}
              />

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#3A36DB]" />
                  <div>
                    <h3 className="font-semibold text-[#0C0950]">{branch.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {branch.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <a
                  href={branch.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#F5B301] px-4 py-2 text-sm font-bold text-[#0C0950] transition hover:bg-[#ffc933]"
                >
                  <FaDirections /> Get directions
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#0C0950] to-[#3A36DB] p-6 text-white shadow-xl shadow-[#0C0950]/20">
              <h3 className="font-semibold">Follow ARC</h3>
              <p className="mt-1 text-sm text-white/75">Student work, events and new batch updates.</p>
              <div className="mt-4 flex gap-3">
                {[
                  { icon: <FaFacebookF />, label: "Facebook", link: "https://www.facebook.com/share/1FGfEcXFkR/" },
                  { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/arcinstitute.21?igsh=MWc2Z21sOHF4bXRxOQ==" },
                  { icon: <FaYoutube />, label: "YouTube", link: "https://youtube.com/@sefclasses?si=QGPoe-7wyOd50OQN" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="rounded-full bg-white/10 p-3 transition hover:bg-[#F5B301] hover:text-[#0C0950]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
