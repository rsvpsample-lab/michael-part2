import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display italic text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          data-testid="text-entourage-title"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          {/* Parents Section */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h3 className="text-sm md:text-lg font-semibold text-foreground mb-3">Parents of the Groom</h3>
              <p className="text-foreground/90 text-xs md:text-sm">Mr. Gesmundo Ignacio</p>
              <p className="text-foreground/90 text-xs md:text-sm">Mrs. Rosalia Ignacio</p>
            </div>
            <div>
              <h3 className="text-sm md:text-lg font-semibold text-foreground mb-3">Parents of the Bride</h3>
              <p className="text-foreground/90 text-xs md:text-sm">Mr. Flavio Deza, Jr.</p>
              <p className="text-foreground/90 text-xs md:text-sm">Mrs. Marieliza Deza</p>
            </div>
          </div>

          {/* Principal Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">NINONG</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Antonio Ramos</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Pedro Morito</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Rogelio Salavaria, Jr.</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Glen Castro</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Sherwin Maneclang</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Dr. Roberto Gonzales</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Noel Geronimo</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Joven Ballesteros</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Rufino Borja, Jr.</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mr. Ronnie Marasigan</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">NINANG</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Josephine Ramos</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Roselle Morito</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Ms. Geralyn Dalisay</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Lilibeth Castro</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Renalyn Maneclang</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Esperanza Escape</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Evangeline Geronimo</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Emily Ballesteros</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Lea Emperador</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Maricar Alipon</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Mrs. Myrna Famadico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Men and Matrons of Honor */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Best Men</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Julius Milo</p>
                <p className="text-foreground/90 text-xs md:text-sm">Armando Espinoza, Jr.</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Matrons of Honor</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Jacklyn Raymundo</p>
                <p className="text-foreground/90 text-xs md:text-sm">Jenine Espinoza</p>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display italic text-foreground mb-6">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-8">
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-2 md:mb-4">Veil</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">John Paul Ignacio</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Shila May Santilles</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-2 md:mb-4">Candle</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Jeffrey Pesinable</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Nikka Cruz</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm md:text-md font-semibold text-foreground mb-2 md:mb-4">Cord</h4>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-foreground/90 text-xs md:text-sm">Darwin Batain</p>
                  <p className="text-foreground/90 text-xs md:text-sm">Christine Jireh Emperador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Bridesmaids</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Joana Rose Villaceran</p>
                <p className="text-foreground/90 text-xs md:text-sm">Kimbie Cedro</p>
                <p className="text-foreground/90 text-xs md:text-sm">Imee Kathleen Onte</p>
                <p className="text-foreground/90 text-xs md:text-sm">Edna Barreras</p>
                <p className="text-foreground/90 text-xs md:text-sm">Patricia Marie Elizon</p>
                <p className="text-foreground/90 text-xs md:text-sm">Aila Grace de Castro</p>
                <p className="text-foreground/90 text-xs md:text-sm">Khia Exechel Yancha</p>
                <p className="text-foreground/90 text-xs md:text-sm">Meryll Llenado</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Groomsmen</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">John Carlo Villaceran</p>
                <p className="text-foreground/90 text-xs md:text-sm">John Cristopher Ignacio</p>
                <p className="text-foreground/90 text-xs md:text-sm">Gerald Cervantes</p>
                <p className="text-foreground/90 text-xs md:text-sm">Jayboy Bordios</p>
                <p className="text-foreground/90 text-xs md:text-sm">Rheymart Romero</p>
                <p className="text-foreground/90 text-xs md:text-sm">Jonnel Balbieran</p>
                <p className="text-foreground/90 text-xs md:text-sm">Angelo Joshua Ramos</p>
                <p className="text-foreground/90 text-xs md:text-sm">Magic Desmonte</p>
              </div>
            </div>
          </div>

          {/* Junior Attendants */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Jr. Groomsmen</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">James Alexander Deza</p>
                <p className="text-foreground/90 text-xs md:text-sm">Flavio Deza, III</p>
                <p className="text-foreground/90 text-xs md:text-sm">John Brent Quilao</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Jr. Bridesmaids</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-foreground/90 text-xs md:text-sm">Kristine Bernadette Deza</p>
                <p className="text-foreground/90 text-xs md:text-sm">Ashley Joy Castro</p>
                <p className="text-foreground/90 text-xs md:text-sm">Sheian Therese Jesry Judicpa</p>
              </div>
            </div>
          </div>

          {/* Other Special Roles */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Special Roles</h4>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Coin Bearer:</span> Sam Gabriel Castro</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Bible Bearer:</span> Jeremy Morito</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Ring Bearer:</span> Ashton Craig Espinoza</p>
                <p className="text-foreground/90 text-xs md:text-sm"><span className="text-foreground font-medium">Banner Bearer:</span> Marissa Deza</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm md:text-md font-semibold text-foreground mb-4">Flower Girls</h4>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <p className="text-foreground/90 text-xs md:text-sm">LJ Deza</p>
                <p className="text-foreground/90 text-xs md:text-sm">Lorraine Deza</p>
                <p className="text-foreground/90 text-xs md:text-sm">Ashley Sophia Salavaria</p>
                <p className="text-foreground/90 text-xs md:text-sm">Alexia Beatrix Raymundo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
