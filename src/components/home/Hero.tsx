import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/slices/authSlice";
import { useGetAllStoresQuery } from "@/redux/services/storeApi";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, TrendingUp, Zap } from "lucide-react";

const badges = [
  { icon: ShoppingBag, label: "50K+ products listed" },
  { icon: TrendingUp, label: "₦2B+ revenue processed" },
  { icon: Zap, label: "3s average checkout" },
];

export default function Hero() {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const { data: storesData } = useGetAllStoresQuery(
    {},
    { skip: !currentUser }
  );

  const firstStore = storesData?.data?.[0];

  const handleCta = () => {
    if (!currentUser) {
      navigate("/onboarding");
      return;
    }
    if (firstStore) {
      navigate(`/dashboard/store/${firstStore._id}`);
      return;
    }
    navigate("/onboarding");
  };

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 lg:px-8 py-20 bg-white relative overflow-hidden">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* pill badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-black/10 bg-[#f4f3ee] text-xs font-medium text-[#444] flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
        Now live — launch your store in under 5 minutes
      </motion.div>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl lg:text-[72px] font-bold text-center leading-[1.1] tracking-tight text-[#171717] max-w-4xl"
      >
        One platform.
        <br />
        <span className="text-[#171717]/40">Multiple stores.</span>
        <br />
        Real-time control.
      </motion.h1>

      {/* subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-base lg:text-lg text-[#666] text-center max-w-xl leading-relaxed"
      >
        Selleasi gives every seller the infrastructure to launch, manage, and
        scale their online store without writing a single line of code.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex items-center gap-4 flex-wrap justify-center"
      >
        <button
          onClick={handleCta}
          className="h-12 px-7 rounded-full bg-[#171717] text-white text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          {currentUser ? "Go to Dashboard" : "Start for free"}
          <ArrowRight size={16} />
        </button>
        <button
          onClick={() => navigate("/store")}
          className="h-12 px-7 rounded-full border border-black/10 text-sm font-medium hover:bg-[#f4f3ee] transition-colors"
        >
          Browse stores
        </button>
      </motion.div>

      {/* stat badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex items-center gap-4 flex-wrap justify-center"
      >
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f3ee] text-xs font-medium text-[#444]"
            >
              <Icon size={14} className="text-[#171717]" />
              {badge.label}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}