import { motion } from 'framer-motion';

const Greeting = () => {
  const hour = new Date().getHours();

  const getGreeting = () => {
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {getGreeting()}, welcome to SE Lab!
    </motion.h1>
  );
};

export default Greeting;
