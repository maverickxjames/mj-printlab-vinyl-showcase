import { Sparkles, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                MJ PrintLab
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Premium vinyl stickers crafted with love. Peel, stick, and express yourself!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#collections" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#howto" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  How to Apply
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Expression Stickers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Spiritual Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Anime & Pop Culture
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Custom Designs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">hello@mjprintlab.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 MJ PrintLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
