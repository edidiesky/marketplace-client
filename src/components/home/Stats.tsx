// src/components/home/StatsScroll.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  {
    value: "10,000+",
    label: "Sellers onboarded",
    description:
      "Entrepreneurs across Nigeria trust Selleasi to power their stores.",
    bg: "#1a56ff",
    color: "#ffffff",
  },
  {
    value: "50,000+",
    label: "Products listed",
    description:
      "From fashion to electronics, every category is represented.",
    bg: "#111111",
    color: "#ffffff",
  },
  {
    value: "₦2B+",
    label: "Revenue processed",
    description: "Real money moving through real stores in real time.",
    bg: "#00a86b",
    color: "#ffffff",
  },
  {
    value: "99.9%",
    label: "Uptime guaranteed",
    description:
      "Your store never sleeps. Neither does our infrastructure.",
    bg: "#f8e600",
    color: "#111111",
  },
  {
    value: "3s",
    label: "Average checkout",
    description:
      "Buyers go from cart to confirmed order in under 3 seconds.",
    bg: "#ff4d00",
    color: "#ffffff",
  },
  {
    value: "150+",
    label: "New stores daily",
    description:
      "New sellers join and launch their first store every single day.",
    bg: "#1a1a2e",
    color: "#c4b5fd",
  },
];

export default function StatsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[750vh]"
      style={{ backgroundColor: "#eef2f7" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center gap-12">
        {/* heading */}
        <div className="pl-[80px] lg:pl-[120px]">
          <span className="text-base uppercase tracking-widest text-[#888]">
            By the numbers
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-2 max-w-lg leading-tight text-[#111]">
            Built for sellers who mean business.
          </h2>
        </div>

        {/* scrolling track */}
        <motion.div
          style={{ x }}
          className="flex gap-100 pl-[80px] lg:pl-[420px] will-change-transform"
        >
          {stats.map((stat, i) => {
            const rotation = i % 2 === 0 ? -8 : 8;
            return (
              <motion.div
                key={i}
                animate={{ rotate: rotation }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                style={{ backgroundColor: stat.bg }}
                className="flex-shrink-0 w-[300px] lg:w-[440px] min-h-[580px] rounded-[24px] p-8 flex flex-col gap-6 relative overflow-hidden"
              >
                {/* decorative circle top right */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-10"
                  style={{ backgroundColor: stat.color }}
                />

                {/* value */}
                <p
                  className="text-5xl lg:text-6xl font-bold leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>

                {/* label */}
                <p
                  className="text-xl font-semibold leading-snug"
                  style={{ color: stat.color }}
                >
                  {stat.label}
                </p>

                {/* description pushed to bottom */}
                <p
                  className="text-sm leading-relaxed mt-auto"
                  style={{ color: `${stat.color}99` }}
                >
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}