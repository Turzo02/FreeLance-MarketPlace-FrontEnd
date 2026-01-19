import React from "react";
import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-24 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Privacy & Terms
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparency is key. Please read our terms to understand how we protect your data and what we expect from our community.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                Our Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At <span className="font-semibold text-foreground">FreeLance MarketPlace</span>, your privacy and data security are our top priorities. 
                By using our platform, you agree to our terms of service and privacy practices outlined below. We are committed to building a trusted environment for all users.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Privacy Policy</h2>
          </div>
          <div className="pl-9 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We collect only the necessary information to provide a seamless experience for our users. This includes registration details, 
              job postings, and task management data. We do not share your personal information with third parties without your consent.
            </p>
            <p>
              Security measures are in place to protect your data, including encrypted connections (SSL) and secure Firebase authentication. 
              Your sensitive data is never stored in plain text.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* Terms of Service */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Terms of Service</h2>
          </div>
          <div className="pl-9 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Users are expected to provide accurate information when creating accounts and posting jobs. Freelancers and clients must communicate 
              respectfully and honor agreed terms for project completion and payment.
            </p>
            <p>
              FreeLance MarketPlace reserves the right to remove any content or user accounts that violate our policies. Continued misuse may result 
              in account suspension or termination to maintain the quality of our platform.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* User Responsibilities */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">User Responsibilities</h2>
          </div>
          <ul className="pl-9 grid gap-3 sm:grid-cols-2">
            {[
              "Maintain confidentiality of your login credentials.",
              "Respect intellectual property rights of others.",
              "Provide truthful information in profiles and jobs.",
              "Follow ethical practices in hiring and task completion."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <div className="bg-secondary/30 border border-border rounded-lg p-6 text-center mt-12">
          <p className="text-muted-foreground">
            By using <span className="font-semibold text-foreground">FreeLance MarketPlace</span>, you acknowledge and agree to these policies.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Last updated: January 2026
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
