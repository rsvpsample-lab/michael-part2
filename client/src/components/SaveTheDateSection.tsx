import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Heart } from 'lucide-react';

const SaveTheDateSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <>
      {/* Header Section with Background */}
      <motion.section 
        id="save-the-date" 
        className="section-pastel-blue py-20 relative overflow-hidden"
        initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={animationsEnabled ? { duration: 1, delay: 0.3 } : { duration: 0 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
        </div>

        {/* Section Header - Centered with max-width */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center relative"
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.5 } : { duration: 0 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
            <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
            <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
            <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

            <motion.div
              className="flex justify-center mb-6"
              initial={animationsEnabled ? { scale: 0 } : { scale: 1 }}
              animate={{ scale: 1 }}
              transition={animationsEnabled ? { duration: 0.5, delay: 0.7, type: "spring" } : { duration: 0 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" data-testid="icon-heart" />
              </div>
            </motion.div>

            <h2 className="font-display italic text-foreground mb-4 text-[48px]" data-testid="text-save-the-date-title">
              Save The Date
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed" data-testid="text-save-the-date-description">
              Relive the moment we shared our special announcement with the world
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Full Width Video Container - Separate section like CoverSection */}
      <motion.section 
        className="relative w-full overflow-hidden"
        initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.8 } : { duration: 0 }}
      >
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
          {/* Video Aspect Ratio Container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/HUthbEOwNHc?si=S_FkuTUhsOsZU60X"
              title="Save The Date Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="iframe-save-the-date-video"
              style={{
                display: 'block',
                border: 'none',
                margin: 0,
                padding: 0
              }}
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Message Section with Background */}
      <motion.section 
        className="section-pastel-blue py-12 relative overflow-hidden"
        initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={animationsEnabled ? { duration: 1, delay: 1.0 } : { duration: 0 }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 1.1 } : { duration: 0 }}
          >
            <p className="text-base text-foreground/70 italic font-script" data-testid="text-video-message">
              "A journey of love that began many years ago, leading us to this beautiful moment"
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default SaveTheDateSection;