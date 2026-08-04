import GlassCard from "@/components/GlassCard";
import { Shield, Lock, Eye, FileText, Mail, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "August 2026";

  return (
    <main className="page-transition pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6 animate-pulse">
              Privacy & Security
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              At CrafZio, we value your trust and are committed to protecting your personal data. 
              This policy explains how we collect, use, and safeguard your information.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <GlassCard hover3D={false} className="p-6 md:p-10 space-y-8">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">1. Introduction</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                CrafZio ("we", "our", or "us") operates the website <a href="https://www.crafzio.in" className="text-primary hover:underline">crafzio.in</a>. 
                We are dedicated to safeguarding the privacy of our website visitors and clients. This privacy policy informs you 
                of our practices regarding the collection, use, and disclosure of personal data when you use our website or contact us.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-secondary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">2. Information We Collect</h2>
              </div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11 space-y-2">
                <p>We may collect the following types of information when you interact with our website:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and any details you provide through our contact form.</li>
                  <li><strong>Project Details:</strong> The service of interest (e.g., Web Development, App Development, CRM Development) and specific messages you send.</li>
                  <li><strong>Usage Data:</strong> Analytical details such as IP address, browser type, pages visited, and time spent on our site to improve user experience.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">3. How We Use Your Information</h2>
              </div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11 space-y-2">
                <p>We use the collected data for various purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To respond to your inquiries, schedule consultations, and provide project quotes.</li>
                  <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
                  <li>To analyze usage metrics so we can continuously optimize our website design and performance.</li>
                  <li>To comply with applicable legal obligations or registration requirements.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">4. Data Sharing and Third-Party Processors</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                We do not sell, trade, or lease your personal information to third parties. We use trusted third-party services like 
                <strong> Web3Forms</strong> to securely transmit the contact form submissions to our email. These processors are 
                bound by strict privacy rules and are only allowed to handle your data for these specific transmission tasks.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4 text-secondary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">5. Security of Your Data</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                The security of your personal data is highly important to us. We implement industry-standard encryption, SSL protocols, 
                and security controls to prevent unauthorized access, alteration, disclosure, or destruction of your personal information.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">6. Contact Us</h2>
              </div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11 space-y-3">
                <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:team@crafzio.in" className="hover:text-primary transition-colors">team@crafzio.in</a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tumkur, India</span>
                  </div>
                </div>
              </div>
            </div>

          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
