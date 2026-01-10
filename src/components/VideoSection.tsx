import { Sparkles, Wand2 } from 'lucide-react';
import transformationVideo from '@/assets/transformation-video.mp4';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-4">
            <Wand2 className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-muted-foreground">The Magic Process</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transform Your Photos Into
            <br />
            <span className="text-gradient-primary">Premium Vinyl Stickers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we turn your favorite images into high-quality, waterproof vinyl stickers 
            that last for years. It's like magic! ✨
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-gold/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Video Frame */}
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-elegant border border-border/50">
              {/* Top Bar */}
              <div className="bg-foreground/5 px-4 py-3 flex items-center gap-2 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background/50 px-4 py-1 rounded-full text-xs text-muted-foreground flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-gold" />
                    Image to Sticker Transformation
                  </div>
                </div>
              </div>
              
              {/* Video */}
              <video 
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={transformationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating Labels */}
            <div className="absolute -left-4 top-1/3 bg-card px-4 py-2 rounded-full shadow-soft border border-border/50 hidden lg:flex items-center gap-2 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Your Photo</span>
            </div>
            
            <div className="absolute -right-4 top-2/3 bg-card px-4 py-2 rounded-full shadow-soft border border-border/50 hidden lg:flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-foreground">Vinyl Sticker</span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            { step: '01', title: 'Upload Photo', desc: 'Send us your favorite image' },
            { step: '02', title: 'We Design', desc: 'Our team creates the perfect sticker' },
            { step: '03', title: 'You Receive', desc: 'Premium vinyl delivered to you' },
          ].map((item, index) => (
            <div 
              key={item.step}
              className="text-center p-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-display font-bold mb-3">
                {item.step}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
