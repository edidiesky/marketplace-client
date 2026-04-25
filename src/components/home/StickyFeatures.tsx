import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  BarChart3,
  Truck,
  Zap,
} from "lucide-react";

const features = [
  {
    tag: "STORE MANAGEMENT",
    title: "Build and manage your store without writing a line of code.",
    bullets: [
      "Create unlimited products with variants, images, and pricing",
      "Manage inventory in real time with low-stock alerts",
      "Customize your storefront with your brand colors and logo",
    ],
    icon: ShoppingBag,
    visual: {
      bg: "#f0fdf4",
      accent: "#004E3F",
      label: "Store dashboard",
      sublabel: "14 products · 3 low stock",
    },
  },
  {
    tag: "ANALYTICS",
    title: "Know exactly what is selling and what is not.",
    bullets: [
      "Revenue charts broken down by day, week, and month",
      "Top performing products at a glance",
      "Customer acquisition and retention tracking",
    ],
    icon: BarChart3,
    visual: {
      bg: "#fefce8",
      accent: "#854d0e",
      label: "Revenue this month",
      sublabel: "₦1,240,000 · +18% vs last month",
    },
  },
  {
    tag: "ORDER FULFILLMENT",
    title: "From payment confirmed to package delivered.",
    bullets: [
      "Automatic order creation on successful payment",
      "Update fulfillment status with tracking number",
      "Buyers receive real-time delivery notifications",
    ],
    icon: Truck,
    visual: {
      bg: "#eff6ff",
      accent: "#1d4ed8",
      label: "Order #ORD-00482",
      sublabel: "Dispatched · Arriving Saturday",
    },
  },
  {
    tag: "PAYMENTS",
    title: "Accept payments via Paystack and Flutterwave instantly.",
    bullets: [
      "Dual gateway support with automatic failover",
      "Payouts to your bank account on demand",
      "Full refund management from the dashboard",
    ],
    icon: Zap,
    visual: {
      bg: "#fdf4ff",
      accent: "#7e22ce",
      label: "Payout processed",
      sublabel: "₦340,000 · GTBank · 2 mins ago",
    },
  },
];

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  

  return (
    <section ref={containerRef} className="relative py-20 flex flex-col gap-10 bg-gray-100">
      <div className="px-4 lg:px-16 text-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Everything you need
        </span>
        <h2 className="text-4xl lg:text-6xl font-semibold mt-2 max-w-2xl mx-auto leading-tight">
          One platform. Every tool your store needs.
        </h2>
      </div>

      {features.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <div
            key={i}
            className="sticky top-0 min-h-screen flex items-center px-4 lg:px-16 py-20"
            style={{ zIndex: i + 1 }}
          >
            <div className="w-full max-w-10xl h-full bg-white p-12 mx-auto grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <div className="flex flex-col gap-6">
                <span
                  className="text-xs font-semibold tracking-widest px-3 py-1 rounded-full w-fit"
                  style={{
                    backgroundColor: feature.visual.bg,
                    color: feature.visual.accent,
                  }}
                >
                  {feature.tag}
                </span>
                <h3 className="text-2xl lg:text-5xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: feature.visual.accent }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-2xl p-10 min-h-[340px] flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: feature.visual.bg }}
              >
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: feature.visual.accent }}
                >
                  <Icon className="text-white w-5 h-5" />
                </div>
                <div
                  className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-10"
                  style={{ backgroundColor: feature.visual.accent }}
                />
                <div className="mt-auto">
                  <p
                    className="text-lg font-semibold"
                    style={{ color: feature.visual.accent }}
                  >
                    {feature.visual.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.visual.sublabel}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}