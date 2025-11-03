import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    // Don't save to localStorage so popup appears on every reload
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] rounded-2xl p-8 md:p-10 max-w-lg w-full mx-4 shadow-2xl border-2 border-primary/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-full shadow-lg">
                  <Music className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">
                  Enhanced Experience
                </h2>
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  Would you like to play beautiful background music to enhance your experience while exploring our wedding invitation?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-base"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="flex-1 border-2 border-primary/50 hover:border-primary text-foreground hover:text-primary bg-transparent hover:bg-primary/10 font-medium py-4 px-6 rounded-lg transition-all duration-300 text-base"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;