import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin, Instagram, CheckCircle } from "lucide-react";

import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, href: "https://github.com/CRAFZIO?view_as=public", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/CrafZio", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/crafzio/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/crafzio.in?igsh=eDdjcWl5Z3gwbm5z", label: "Instagram" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        throw new Error("Web3Forms Access Key is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `New Contact Submission: ${formData.service}`,
          service: formData.service,
          message: formData.message,
          from_name: "CrafZio Contact Form",
        }),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="page-transition pt-24">


      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Have a project in mind? We'd love to hear about it. 
              Get in touch and let's start creating together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Form */}
            <div>
              <GlassCard hover3D={false} className="p-6 md:p-8">
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs md:text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Application Development">Application Development</option>
                      <option value="CRM Development">CRM Development</option>
                      <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    icon={isSubmitting ? CheckCircle : Send}
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              <GlassCard hover3D={false} className="p-6 md:p-8">
                <h2 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h2>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                      <a href="mailto:team@crafzio.in" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                        team@crafzio.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 md:w-6 h-5 md:h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Phone</h3>
                      <a href="tel:+917026496890" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                        +917026496890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Location</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Tumkur, India
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Social Links */}
              <GlassCard hover3D={false} className="p-6 md:p-8">
                <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4">Follow Us</h3>
                <div className="flex gap-2 md:gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 md:w-12 h-10 md:h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-4 md:w-5 h-4 md:h-5" />
                    </a>
                  ))}
                </div>
              </GlassCard>

              {/* Map Placeholder */}
              <GlassCard hover3D={false} className="p-6 md:p-8 h-40 md:h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
