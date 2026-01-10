import stickerHowTo from '@/assets/sticker-howto.png';

const steps = [
  {
    number: '01',
    title: 'Clean the Surface',
    description: 'Wipe down the surface with a clean cloth to remove dust and oils.',
  },
  {
    number: '02',
    title: 'Peel the Backing',
    description: 'Carefully peel the backing paper from your vinyl sticker.',
  },
  {
    number: '03',
    title: 'Apply & Smooth',
    description: 'Place the sticker and use a card to smooth out any bubbles.',
  },
];

const HowToSection = () => {
  return (
    <section id="howto" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={stickerHowTo}
                alt="How to apply stickers"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl -z-10 opacity-40" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Easy Application</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Apply in <span className="text-gradient-primary">3 Simple Steps</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Our premium vinyl stickers are designed for effortless application. 
              No special tools needed – just clean, peel, and stick!
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-display text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
