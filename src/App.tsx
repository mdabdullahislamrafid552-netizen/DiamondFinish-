/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Menu, X, MapPin, Instagram, Sparkles, Paintbrush, Car, Quote, ChevronRight, Plus, Minus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'FAQ', 'Contact'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#212121]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ height: '148px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="#home" className="flex items-center gap-2 z-50">
            <img 
              src="https://i.imgur.com/0v09I6a.png" 
              alt="DiamondFinish Auto" 
              className="w-[112px] h-[100px] object-contain brightness-0 invert"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[#ffffff] hover:text-gray-300 transition-colors text-sm font-medium uppercase tracking-wider">
                {link}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-[#ffffff] hover:bg-gray-200 text-[#212121] px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#ffffff] z-50 p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#212121] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block text-[#ffffff] hover:text-gray-300 text-base font-medium uppercase tracking-wider py-2"
                >
                  {link}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#ffffff] text-[#212121] px-6 py-3 rounded text-base font-bold uppercase tracking-wider mt-4"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#212121]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://berardisdetailing.com/wp-content/uploads/2024/11/The-Importance-of-Regular-Car-Detailing.jpg" 
          alt="Professional Car Detailing" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#212121]/60 via-[#212121]/40 to-[#212121]"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-left mt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#ffffff] tracking-tighter mb-6 leading-[1.05]"
          >
            Professional <br className="hidden md:block" /> Car Detailing.
            <motion.span 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-light text-gray-400 text-3xl md:text-5xl lg:text-6xl block mt-4 tracking-tight"
            >
              Brings Your Vehicle Back to Life.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl font-light leading-relaxed"
          >
            Premium detailing services tailored for absolute perfection. <br className="hidden md:block" />
            <span className="font-medium text-white border-b border-white/30 pb-1">DM us your vehicle's year & model for an instant quote.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-start justify-start gap-4"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#ffffff] text-[#212121] px-10 py-4 rounded text-lg font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:bg-transparent transition-colors"></span>
              Get a Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 mt-3 font-light tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Fast responses • Easy booking
            </p>
          </motion.div>

          <div className="mt-16 flex items-center justify-start gap-2 text-gray-400 opacity-80">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium tracking-[0.15em] uppercase">Serving Toronto & the GTA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-extrabold text-[#212121] mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#ffffff] text-[#212121] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Professional Auto Detailing in Toronto
            </h2>
            <div className="w-24 h-1 bg-[#212121] mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-light">
              At DiamondFinish Auto, we specialize in high-quality car detailing designed to restore and protect your vehicle’s appearance. Our professional detailing process focuses on precision, premium products, and expert techniques to ensure every vehicle leaves looking its absolute best.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-12">
              Serving Toronto and the Greater Toronto Area, we are committed to providing exceptional results that exceed customer expectations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <AnimatedCounter value={5} label="Years Experience" suffix="+" />
              <AnimatedCounter value={1500} label="Vehicles Detailed" suffix="+" />
              <AnimatedCounter value={100} label="Satisfied Clients" suffix="%" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/641390087_17897969709399561_4192106927955006132_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzg0MDM1OTk2MDQzODE5MDIxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=Z3Y8wHSenE8Q7kNvwHbH1oh&_nc_oc=AdnibjnUPNetdC15PpqBu8EYIoCtw2C2L4uF0Y3z_JQ6XDG0HzsHYODbNbfRDyS57T8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=7uPjEqKgASLhO6xXUAQX8Q&_nc_ss=8&oh=00_Afw_rIQ6hwpIJLo7Y_g2fhOGyWAxGM4hknkLmup0heKMKQ&oe=69BCAAB1" 
                alt="DiamondFinish Auto Detailing Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-100 rounded-2xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-gray-200 rounded-2xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Interior Detailing',
      desc: 'Deep cleaning of seats, carpets, dashboards, and interior surfaces to restore your vehicle’s interior.'
    },
    {
      icon: Sparkles,
      title: 'Exterior Detailing',
      desc: 'Professional exterior wash, polish, and protection to bring back your car’s shine.'
    },
    {
      icon: Paintbrush,
      title: 'Paint Correction',
      desc: 'Remove swirl marks, scratches, and imperfections to restore a flawless paint finish.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#212121] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Services</h2>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#2a2a2a] p-10 rounded-lg border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-[#212121]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    {
      img: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/639520102_17897878752399561_6021166239986168906_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzgzOTgyNjM4Mzc5MTA1MTkwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=llmhDO7rHS4Q7kNvwGsXWjj&_nc_oc=AdkelN-_bL9nQtdLTmboapZc-p5JoYU_ZrXBxqz9Pihyk4lk5AXCchh1hhfEu9weB2w&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=7uPjEqKgASLhO6xXUAQX8Q&_nc_ss=8&oh=00_AfwXZ4DlIRXdKFOinZsniRfxThHVa2ci-uALpQQ60p419A&oe=69BC9DDC",
      caption: "Premium Exterior Detailing"
    },
    {
      img: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/536213139_1327588886044104_1986451531351419350_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=103&ig_cache_key=MzcwMzU4NjA4MTM5NzUyODM4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=IyF5eh-35FQQ7kNvwH26Hut&_nc_oc=AdnMRnONOSMlZDe5h2zWKKlQ14jl-R9ysUTkuijkZblIEYCX961hZ-xW3HCKdcKLQdk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-2.fna&_nc_gid=5IjqoushJMC2qovTaa1AVg&_nc_ss=8&oh=00_AfzGuNxRPhNxIYHXjXKS92HKV2vr9kPfawbAT1YVH7Bq5A&oe=69BC89F1",
      caption: "Flawless Paint Correction"
    },
    {
      img: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/651407160_17900698038399561_2733580303612964393_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=Mzg1MzAxMDU3Njc4NDA3OTE5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PvAp3UkkX5UQ7kNvwF6XflV&_nc_oc=AdlGOdy-_Fk4nPvcZ8R9kbOkcDWHpfDaCHVoEBp9Al_aAG8KcZF1FCcDlepSYUT-oLc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=7uPjEqKgASLhO6xXUAQX8Q&_nc_ss=8&oh=00_Afy15gidUCdHMUNfYGvOVKSGkR9huld1fsZ04CquJsVREQ&oe=69BC9A00",
      caption: "Interior Deep Cleaning"
    },
    {
      img: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/651018606_17900176773399561_5355651056665694886_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=Mzg1MDU5MjE0MzE0NDc2Mjg3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=2FaJQ2wUlokQ7kNvwGybRQw&_nc_oc=AdmMThEnKHEFPYeLuQJt_vYs6L4dyBbFLUN0m6PvS2WQ9tiS3DUec1Q1uyMNdz1hcdI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=7uPjEqKgASLhO6xXUAQX8Q&_nc_ss=8&oh=00_AfwipX6AlLiA3mpYeT8hIr45dRB_joRHjBHNXWYGWdKqAw&oe=69BC8723",
      caption: "Showroom Finish"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#ffffff] text-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Work Gallery</h2>
          <div className="w-24 h-1 bg-[#212121] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[21/9] lg:aspect-auto' : 'aspect-square'}`}
            >
              <img src={item.img} alt={item.caption} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#212121]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-[#ffffff] text-lg font-medium tracking-wide">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "John D.",
      city: "Toronto, Canada",
      text: "Excellent detailing work. My car looks brand new inside and out. The attention to detail is unmatched."
    },
    {
      name: "Sarah M.",
      city: "Toronto, Canada",
      text: "Incredible shine and finish after the paint correction. They removed years of scratches. Highly recommend!"
    },
    {
      name: "Michael T.",
      city: "Toronto, Canada",
      text: "Professional and reliable service. They came right to my driveway and did an amazing job on my SUV."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#212121] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#2a2a2a] p-10 rounded-lg relative"
            >
              <Quote className="w-10 h-10 text-gray-600 absolute top-6 right-6 opacity-50" />
              <p className="text-gray-300 mb-8 font-light leading-relaxed relative z-10">"{review.text}"</p>
              <div>
                <p className="text-[#ffffff] font-bold text-lg">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a full detail take?",
      answer: "A full interior and exterior detail typically takes between 3 to 5 hours, depending on the size and condition of your vehicle. Paint correction and ceramic coating services may require a full day or more."
    },
    {
      question: "Do you offer mobile detailing or do I need to drop off my car?",
      answer: "We offer both! You can drop your vehicle off at our secure facility, or we can come to your location in Toronto and the GTA, provided you have access to water and electricity."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal maintenance, we recommend a full detail every 4-6 months, with regular maintenance washes every 2-4 weeks. This keeps your paint protected and your interior pristine."
    },
    {
      question: "What is the booking process?",
      answer: "It's simple! Just send us a DM on Instagram or fill out the contact form below with your vehicle's year, make, and model. We'll reply promptly with a quote and available dates."
    },
    {
      question: "Will detailing remove all scratches from my paint?",
      answer: "Our paint correction process can remove up to 90-95% of swirl marks and light scratches. However, deep scratches that have penetrated the clear coat may require touch-up paint or bodywork."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#ffffff] text-[#212121]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#212121] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 bg-gray-50 text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] text-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Request a Quote</h2>
            <div className="w-24 h-1 bg-[#212121] mb-8"></div>
            
            <p className="text-xl text-gray-700 mb-8 font-light">
              DM Your Vehicle’s Year & Model for a Free Quote
            </p>

            <a 
              href="https://www.instagram.com/diamondfinish_auto/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 text-lg font-bold hover:text-gray-600 transition-colors mb-12"
            >
              <Instagram className="w-6 h-6" />
              @diamondfinish_auto
            </a>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                Book professional interior detailing, exterior detailing, and paint correction services in Toronto and the GTA. DiamondFinish Auto is your trusted partner for premium car care. We guarantee a showroom finish every time.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#212121] p-10 rounded-lg text-[#ffffff]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Name</label>
                <input type="text" id="name" required className="w-full bg-[#2a2a2a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Email</label>
                <input type="email" id="email" required className="w-full bg-[#2a2a2a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Vehicle Year & Model</label>
                <input type="text" id="vehicle" required className="w-full bg-[#2a2a2a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="e.g. 2023 Porsche 911" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} className="w-full bg-[#2a2a2a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us what services you are looking for..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting || isSubmitted} className="w-full bg-[#ffffff] hover:bg-gray-200 text-[#212121] font-bold uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Get a Quote'} {!isSubmitting && !isSubmitted && <ChevronRight className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <img 
            src="https://i.imgur.com/0v09I6a.png" 
            alt="DiamondFinish Auto" 
            className="h-12 w-auto object-contain mx-auto md:mx-0 mb-4 brightness-0 invert"
          />
          <p className="text-sm">Professional Auto Detailing in Toronto</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/diamondfinish_auto/" target="_blank" rel="noreferrer" className="hover:text-[#ffffff] transition-colors" aria-label="Follow us on Instagram">
            <Instagram size={24} />
          </a>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} DiamondFinish Auto.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans bg-[#212121] selection:bg-[#ffffff] selection:text-[#212121] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
