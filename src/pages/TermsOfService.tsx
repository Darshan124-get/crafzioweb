import GlassCard from "@/components/GlassCard";
import { Scale, ShieldAlert, Award, RefreshCw, HelpCircle, Mail, MapPin } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "August 2026";

  return (
    <main className="page-transition pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Legal Agreement
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Please read these Terms of Service carefully before using the crafzio.in website 
              or engaging our professional services.
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
                  <Scale className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">1. Acceptance of Terms</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                By accessing and browsing the CrafZio website (<a href="https://www.crafzio.in" className="text-primary hover:underline">crafzio.in</a>) 
                or placing an inquiry, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these terms, please discontinue use of this site immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-secondary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">2. Services Offered</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                CrafZio is an MSME-registered enterprise offering professional digital services including, but not limited to, 
                Web Development, Application Development, CRM Design/Development, and E-commerce Solutions. Project scopes, timelines, 
                and payment schedules are subject to separate formal agreements signed directly with the clients.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">3. Intellectual Property</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                All contents published on this site, including logos, visual graphics, site copy, icons, design layouts, and source code, 
                are the exclusive intellectual property of CrafZio unless otherwise stated. Unapproved reproduction, distribution, 
                or copying of any asset from this website is strictly prohibited.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">4. User Obligations & Conduct</h2>
              </div>
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11 space-y-2">
                <p>As a condition of your use of the website, you agree not to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use the website for any purpose that is unlawful, prohibited, or unethical.</li>
                  <li>Attempt to disrupt, breach, or damage the system infrastructure, routing, or website performance.</li>
                  <li>Use the contact forms to distribute spam, advertising, or malicious payloads.</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-4 h-4 text-secondary" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">5. Limitations of Liability</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                This website and its content are provided on an "as is" and "as available" basis without warranties of any kind. 
                CrafZio does not guarantee that website functions will be uninterrupted or error-free. We shall not be held liable for 
                any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-lg md:text-xl font-bold font-display">6. Governing Law & Dispute Resolution</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-11">
                These terms shall be governed by, and construed in accordance with, the laws of the State of Karnataka, India, 
                without regard to conflict of law principles. Any dispute arising out of or relating to these terms shall be subject 
                to the exclusive jurisdiction of the competent courts of Tumkur, India.
              </p>
            </div>

            {/* Contact Details */}
            <div className="pt-6 border-t border-border space-y-4 pl-11">
              <h3 className="font-semibold text-sm md:text-base">Contact Legal Representative</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
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

          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
