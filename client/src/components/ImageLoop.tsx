import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section id="slideshow" className="section-hard-blue w-full overflow-hidden py-16">
      <div className="text-loop-container flex items-center justify-center">
        <div className={`${animationsEnabled ? 'text-loop-track' : 'text-loop-track-static'}`}>
          <h2 className="text-loop-text font-display text-6xl md:text-8xl lg:text-9xl text-gold-bright font-light tracking-wide" data-testid="text-loop-invited">
            You're Invited • You're Invited • You're Invited • You're Invited • You're Invited • You're Invited • 
          </h2>
        </div>
      </div>
      <style>{`
        .text-loop-container {
          width: 100%;
          overflow: hidden;
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
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageLoop;
