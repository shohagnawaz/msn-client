import { motion } from "framer-motion";
import { FaUsers, FaStar, FaBriefcase } from "react-icons/fa";

function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-gradient-to-b from-white to-slate-50">
      <div className="flex-shrink-0 w-11 h-11 rounded-lg grid place-items-center bg-slate-100">
        {icon}
      </div>
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-lg font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 sm:h-80 md:h-full relative"
          >
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaborating around laptop"
                className="object-cover w-full h-full"
                draggable={false}
              />
            </picture>
          </motion.div>

          {/* Right: Content */}
          <div className="p-6 sm:p-8 md:p-12">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900"
            >
              About Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-600 text-base sm:text-lg"
            >
              We build delightful web experiences focused on clarity, performance and accessibility. Our
              team blends pragmatic engineering with strong UX to ship products users love.
            </motion.p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard icon={<FaUsers className="w-5 h-5" />} label="Users" value="12k+" />
              <StatCard icon={<FaStar className="w-5 h-5" />} label="Rating" value="4.9/5" />
              <StatCard icon={<FaBriefcase className="w-5 h-5" />} label="Projects" value="320+" />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Get in touch
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
              >
                Our services
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-sm text-slate-500"
            >
              <strong>Accessible & responsive.</strong> Built with semantic HTML, keyboard-focus states,
              and responsive breakpoints so content looks great on every device.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


