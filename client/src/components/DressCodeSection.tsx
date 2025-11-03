import { motion } from 'framer-motion';

import semiformalImage from "@assets/guests_1762084399376.png";
import formalImage from "@assets/principal-sponsors_1762084406367.png";

const DressCodeSection = () => {
  const principalSponsorsColors = [
    { name: 'Beige (ladies\' gown)', color: '#D7C3A8' },
    { name: 'Barong beige/khaki pants (light)', color: '#E7D7B8' },
    { name: 'Khaki beige (medium)', color: '#CDB493' }
  ];

  const guestsColors = [
    { name: 'Champagne', color: '#F7E7CE' },
    { name: 'Light brown', color: '#D1A976' },
    { name: 'Warm beige', color: '#EAD9B9' },
    { name: 'Cream', color: '#F8F3E8' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto relative">
            <div className="space-y-4">
              <div>
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Ninong / Ninang
                </p>
                <p className="text-base text-foreground">
                  Barong and khaki pants / Long Dress
                </p>
              </div>
              <div className="border-t border-primary/30 pt-4">
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Guests
                </p>
                <p className="text-base text-foreground">
                  Ladies - dress or any formal/semi-formal attire<br />
                  Gents - long sleeves/polo or any formal/semi-formal attire
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={formalImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                {/* Color Palette for Principal Sponsors */}
                <div className="mt-6 flex justify-center gap-3">
                  {principalSponsorsColors.map((colorItem, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-12 h-12 mx-auto rounded-full border-2 border-white/20 shadow-md"
                        style={{ backgroundColor: colorItem.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">SEMI-FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={semiformalImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
                {/* Color Palette for Guests */}
                <div className="mt-6 flex justify-center gap-3">
                  {guestsColors.map((colorItem, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-12 h-12 mx-auto rounded-full border-2 border-white/20 shadow-md"
                        style={{ backgroundColor: colorItem.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern Additional Guidelines */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <motion.h3 
            className="text-xl font-body font-medium text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.2 }}
          >
            Additional Guidelines
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { 
                title: "Ninong: Barong and khaki pants", 
                description: "Please dress elegantly for this special occasion.",
                delay: 9.4
              },
              { 
                title: "Ninang: Long Dress", 
                description: "Please dress elegantly for this special occasion.",
                delay: 9.45
              },
              { 
                title: "Guests - Ladies: dress or any formal/semi-formal attire", 
                description: "Elegant and tasteful attire is requested.",
                delay: 9.5
              },
              { 
                title: "Guests - Gents: long sleeves/polo or any formal/semi-formal attire", 
                description: "Elegant and tasteful attire is requested.",
                delay: 9.55
              },
              { 
                title: "No white colors", 
                description: "Avoid wearing white, as this color is reserved for the bride.",
                delay: 9.6
              },
              { 
                title: "Respectful attire", 
                description: "Kindly ensure your attire is respectful and appropriate for a religious ceremony.",
                delay: 9.7
              }
            ].map((guideline, index) => (
              <motion.div 
                key={index}
                className="bg-card/20 rounded-xl p-4 border border-border/50 hover:bg-card/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: guideline.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{guideline.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{guideline.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;