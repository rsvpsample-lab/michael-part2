interface CoverSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, videoUrl, alt, className = "" }: CoverSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image/Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            onEnded={(e) => {
              const video = e.currentTarget;
              video.currentTime = 0;
              video.play();
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : imageUrl ? (
          <img 
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
          />
        ) : null}
      </div>
    </section>
  );
};

export default CoverSection;