import { counterItems } from '../constants';
import CountUp from 'react-countup';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {counterItems.map((item) => (
          <CounterCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

const CounterCard = ({ item }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // Tilt based on mouse Y
  const rotateY = useTransform(x, [-100, 100], [-15, 15]); // Tilt based on mouse X

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      x.set(mouseX / 2); // Scale for smoother effect
      y.set(mouseY / 2);
    };

    const handleMouseLeave = () => {
      x.set(0); // Reset tilt
      y.set(0);
    };

    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-10 flex flex-col justify-center items-center shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-shadow duration-500 overflow-hidden"
      initial={{ scale: 0.9, rotateX: 20, rotateY: 20, z: 0 }}
      animate={{ scale: 1, rotateX: 0, rotateY: 0, z: 10 }}
      whileHover={{ scale: 1.05, z: 30 }}
      style={{ perspective: '1200px', rotateX, rotateY }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Inner Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      <div className="counter-number text-white text-6xl font-extrabold mb-3 drop-shadow-lg">
        <CountUp suffix={item.suffix} end={item.value} duration={2.5} />
      </div>
      <div className="text-gray-300 text-xl font-medium text-center drop-shadow-md">
        {item.label}
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent hover:border-white/20 transition-colors duration-300" />
    </motion.div>
  );
};

export default AnimatedCounter;