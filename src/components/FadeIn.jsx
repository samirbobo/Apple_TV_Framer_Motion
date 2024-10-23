import { motion } from "framer-motion";

export default function FadeIn({ children, margin }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin }}
    >
      {children}
    </motion.div>
  );
}
