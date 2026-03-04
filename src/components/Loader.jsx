import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader-wrapper"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <h1 className="loader-text">Yash Nagla</h1>
    </motion.div>
  );
}

export default Loader;
