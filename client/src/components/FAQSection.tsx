import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What happens during the ceremony?",
      icon: Camera,
      answer: "UNPLUGGED CEREMONY - We've hired professional photographers to capture the cherished moments of our day. We kindly request that guests refrain from taking photos or videos during the ceremony, allowing everyone to be fully present and immersed in this sacred moment. Please ensure the aisle remains clear during the bridal entrance. After the ceremony concludes and throughout the entire reception, you're welcome to take as many photos and videos as you'd like! We also ask that all children remain quiet and respectful during the wedding ceremony to maintain a serene and meaningful atmosphere."
    },
    {
      question: "What time should I arrive?",
      icon: Clock,
      answer: "Please plan to arrive at St. John Marie Vianney Parish Church by 3:30 PM to allow time for seating. The ceremony begins promptly at 4:00 PM. Given Tagaytay's location and potential traffic, we recommend leaving early to ensure you arrive comfortably on time. The drive from Metro Manila typically takes 1.5 to 2 hours depending on traffic conditions."
    },
    {
      question: "Can I bring a plus-one or additional guests?",
      icon: Users,
      answer: "Due to venue capacity and seating constraints, we can only accommodate guests who have been formally invited and confirmed via RSVP. We appreciate your understanding that we're unable to accommodate additional guests beyond those listed on your invitation. This helps us ensure that every guest has a comfortable and enjoyable experience at our celebration."
    },
    {
      question: "What should I wear?",
      icon: Calendar,
      answer: "We kindly request formal attire for our celebration. For principal sponsors (ninong/ninang): Barong and khaki pants, or long dress. For guests: Ladies - dress or any formal/semi-formal attire; Gents - long sleeves/polo or any formal/semi-formal attire. Please avoid wearing white colors, as these are reserved for the bride. Consider our color palette of beige and khaki tones when choosing your outfit. All attire should be respectful and appropriate for a religious ceremony."
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display italic text-gold mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-foreground flex-shrink-0" />
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;