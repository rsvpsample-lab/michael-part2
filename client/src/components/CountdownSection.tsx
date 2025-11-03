import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const targetDate = new Date('November 29, 2025 16:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Text Loop - You're Invited */}
        <div className="text-loop-container flex items-center justify-center mb-12 overflow-hidden">
          <div className={`${animationsEnabled ? 'text-loop-track' : 'text-loop-track-static'}`}>
            <h2 className="text-loop-text font-display text-5xl md:text-7xl lg:text-8xl text-gold-bright font-light tracking-wide" data-testid="text-loop-invited">
              You're Invited • You're Invited • You're Invited • You're Invited • You're Invited • You're Invited • 
            </h2>
          </div>
        </div>

        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <h2 className="text-4xl font-display text-foreground mb-2" data-testid="text-countdown-title">
            Forever starts soon
          </h2>
        </motion.div>



        <motion.div 
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.6 } : { duration: 0 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.8 + (index * 0.1) 
              } : { duration: 0 }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-display mb-1 text-primary"
                key={item.value}
                initial={animationsEnabled ? { opacity: 0.7, scale: 0.9 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={animationsEnabled ? { duration: 0.3 } : { duration: 0 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs font-body uppercase tracking-wider text-foreground/70">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      
      <style>{`
        .text-loop-container {
          width: 100%;
        }
        
        .text-loop-track {
          display: flex;
          white-space: nowrap;
          animation: scroll-text 20s linear infinite;
        }
        
        .text-loop-track-static {
          display: flex;
          white-space: nowrap;
        }
        
        .text-loop-text {
          display: inline-block;
          padding-right: 2rem;
        }
        
        @keyframes scroll-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 768px) {
          .text-loop-text {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default CountdownSection;