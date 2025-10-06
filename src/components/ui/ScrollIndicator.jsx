import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center cursor-pointer text-foreground/80 hover:text-primary transition-colors"
        animate={{ y: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "easeInOut",
        }}
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p className="font-engravers text-sm tracking-wider mb-1">PROVE O RESULTADO</p>
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </motion.div>
  );
};