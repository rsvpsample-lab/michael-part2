import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
        onEnded={(e) => {
          const video = e.currentTarget;
          video.currentTime = 0;
          video.play();
        }}
      >
        <source src="https://res.cloudinary.com/duy8geshi/video/upload/v1762084174/First_page_video_cxdoqo.mp4" type="video/mp4" />
      </video>
      {/* Cinematic gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'JOHN MICHAEL\n&\nCYBELLE',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                JOHN MICHAEL
                <br />
                &
                <br />
                CYBELLE
              </span>
            )}
          </h1>
        </div>

        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white/90 font-light tracking-wide font-times" data-testid="text-date">
                  11.29.2025 | Saturday
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white/90 font-light tracking-wide font-times" data-testid="text-venue">
                  St. John Marie Vianney Parish Church
                </p>
                <p className="text-base sm:text-lg text-white/80 font-light tracking-wide font-times">
                  Brgy. Lalaan II Silang, Cavite
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className={`transition-all duration-700 opacity-100 mt-8 ${animationsEnabled ? 'animate-fade-scale' : ''}`}>
            <div className="flex flex-col items-center">
              <p className="text-white/70 text-sm tracking-widest mb-2 font-light">SCROLL DOWN</p>
              <div className="scroll-down-arrow" data-testid="scroll-down-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-section .bg-white\\/10 {
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }


        /* Scroll Down Indicator Animation */
        .scroll-down-arrow {
          animation: bounce 2s infinite;
          cursor: pointer;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: white;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
