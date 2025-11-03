import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FolderOpen, Images, Folder, Camera } from 'lucide-react';
import DomeGallery from './DomeGallery';

// Prenup photos
import prenup from '@assets/prenup_1762085059808.JPG';
import prenup1 from '@assets/prenup2_1762085059809.JPG';
import prenup2 from '@assets/prenup3_1762085059809.jpg';
import prenup3 from '@assets/prenup4_1762085059809.JPG';
import prenup4 from '@assets/prenup5_1762085059810.JPG';
import prenup5 from '@assets/prenup6_1762085059810.JPG';
import prenup6 from '@assets/prenup7_1762085059811.JPG';
import prenup7 from '@assets/prenup8_1762085059811.JPG';
import prenup8 from '@assets/prenup9_1762085059811.JPG';
import prenup9 from '@assets/prenup10_1762085059812.JPG';
import prenup10 from '@assets/prenup11_1762085059813.JPG';
import prenup11 from '@assets/prenup12_1762085059813.JPG';
import prenup12 from '@assets/prenup13_1762085059813.JPG';

const MemorableMomentsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { src: prenup, alt: "Prenup photo 1" },
    { src: prenup1, alt: "Prenup photo 2" },
    { src: prenup2, alt: "Prenup photo 3" },
    { src: prenup3, alt: "Prenup photo 4" },
    { src: prenup4, alt: "Prenup photo 5" },
    { src: prenup5, alt: "Prenup photo 6" },
    { src: prenup6, alt: "Prenup photo 7" },
    { src: prenup7, alt: "Prenup photo 8" },
    { src: prenup8, alt: "Prenup photo 9" },
    { src: prenup9, alt: "Prenup photo 10" },
    { src: prenup10, alt: "Prenup photo 11" },
    { src: prenup11, alt: "Prenup photo 12" },
    { src: prenup12, alt: "Prenup photo 13" }
  ];

  const dialogImages = [
    { src: prenup, title: "", description: "" },
    { src: prenup1, title: "", description: "" },
    { src: prenup2, title: "", description: "" },
    { src: prenup3, title: "", description: "" },
    { src: prenup4, title: "", description: "" },
    { src: prenup5, title: "", description: "" },
    { src: prenup6, title: "", description: "" },
    { src: prenup7, title: "", description: "" },
    { src: prenup8, title: "", description: "" },
    { src: prenup9, title: "", description: "" },
    { src: prenup10, title: "", description: "" },
    { src: prenup11, title: "", description: "" },
    { src: prenup12, title: "", description: "" }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-foreground mb-8" data-testid="text-prenup-photos-title">
            Prenup Photos
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-foreground/90">
            Capturing our love story before we say 'I do'
          </p>
        </motion.div>

        {/* Dome Gallery */}
        <motion.div 
          className="w-full h-96 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          <DomeGallery
            images={images}
            fit={0.6}
            grayscale={false}
            overlayBlurColor="#e5e5e5"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            maxVerticalRotationDeg={8}
            dragSensitivity={15}
          />
        </motion.div>

        {/* Open All Photos Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-script text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsGalleryOpen(true)}
            data-testid="button-open-all-photos"
          >
            <Images className="w-5 h-5 mr-2" />
            Open All Photos
          </Button>
        </motion.div>

        {/* Gallery Modal */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-5xl w-full h-[80vh] flex flex-col p-0">
            <DialogTitle className="sr-only">Prenup Photos Gallery</DialogTitle>
            <DialogDescription className="sr-only">Browse through our prenup photo collection capturing our love story</DialogDescription>
            <div className="flex-1 relative bg-black/95 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-xl font-script">Prenup Photos</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="w-4 h-4" />
                    <span>{selectedImageIndex + 1} / {dialogImages.length}</span>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={dialogImages[selectedImageIndex].src}
                  alt={dialogImages[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain"
                  data-testid={`img-gallery-main-${selectedImageIndex}`}
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                data-testid="button-prev-image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                data-testid="button-next-image"
              >
                →
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div className="text-white text-center">
                  <h4 className="text-lg font-script mb-1">{dialogImages[selectedImageIndex].title}</h4>
                  <p className="text-sm opacity-80">{dialogImages[selectedImageIndex].description}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-4 bg-white dark:bg-gray-900">
              <div className="flex space-x-2 overflow-x-auto">
                {dialogImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index 
                        ? 'border-primary shadow-lg' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    data-testid={`img-thumbnail-${index}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;