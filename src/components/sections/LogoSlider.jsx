import { AnimatePresence, motion } from "framer-motion";

const LogoSlider = () => {
  const logos = [
    { id: 1, title: "FIRMALOGO", className: "font-h1 font-bold text-blue-500" },
    { id: 2, title: "FIRMALOGO", className: "font-h1 font-bold text-red-500" },
    {
      id: 3,
      title: "FIRMALOGO",
      className: "font-h1 font-bold text-green-500",
    },
  ];

  return (
    <AnimatePresence className="flex items-center space-x-20 overflow-hidden">
      <div className="flex items-center space-x-20 overflow-hidden">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            className={`${logo.className}`}
            initial={{ x: "-100vw" }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: index,
            }}
          >
            {logo.title}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default LogoSlider;
