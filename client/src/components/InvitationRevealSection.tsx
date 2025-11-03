import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import EnvelopeAnimation from './EnvelopeAnimation';
import QuizGame from './QuizGame';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const InvitationRevealSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const [showButton, setShowButton] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleOpenInvitation = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowQuiz(true);
    }, animationsEnabled ? 500 : 0);
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setQuizCompleted(true);
    setShowQuiz(false);
  };

  return (
    <motion.section 
      className="section-hard-blue relative min-h-screen w-full overflow-hidden px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
      data-testid="section-invitation-reveal"
    >
      <div className="relative flex min-h-screen w-full items-center justify-center">
        {/* Know Us Button */}
        {showButton && (
          <motion.div
            initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="z-20 flex flex-col items-center gap-6"
          >
            <Button
              onClick={handleOpenInvitation}
              className="bg-gradient-to-r from-[#E8D7C3] to-[#D9C8B8] hover:from-[#D9C8B8] hover:to-[#E8D7C3] text-[#0c111d] text-xl md:text-2xl px-12 py-8 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,200,184,0.5)] font-bold"
              style={{ fontFamily: 'Boska, serif' }}
              data-testid="button-open-invitation"
            >
              Know Us
            </Button>
            
            {/* Moving Arrow */}
            <motion.div
              onClick={handleOpenInvitation}
              className="cursor-pointer"
              animate={animationsEnabled ? {
                y: [0, 10, 0],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown 
                className="w-8 h-8 md:w-10 md:h-10 text-[#E8D7C3] drop-shadow-lg" 
                strokeWidth={3}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Quiz Game */}
        {showQuiz && !quizCompleted && (
          <div className="relative z-30 w-full flex items-center justify-center">
            <QuizGame 
              onComplete={handleQuizComplete}
              animationsEnabled={animationsEnabled}
            />
          </div>
        )}

        {/* Envelope Animation */}
        {quizCompleted && (
          <div className="relative z-0 w-full flex items-center justify-center">
            <EnvelopeAnimation 
              isVisible={quizCompleted} 
              animationsEnabled={animationsEnabled}
              score={finalScore}
            />
          </div>
        )}

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-white rotate-45"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvitationRevealSection;