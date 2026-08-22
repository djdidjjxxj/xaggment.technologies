import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Xaggment Technologies</title>
                <meta name="description" content="Privacy Policy for Xaggment Technologies — how we collect, use, and protect your information." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <span className="eyebrow-label mb-2 block">Legal</span>
                        <h1 className="section-title mb-4">Privacy Policy</h1>
                        <p className="text-sm font-bold text-slate-400">Last updated: August 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                        <p>
                            Xaggment Technologies ("we", "us", or "our") operates the website https://kaustav-exe.github.io/xaggment.technologies/ and related services. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website or interact with our services.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">1. Information We Collect</h2>
                        <p>
                            We collect information that you voluntarily provide to us when submitting project enquiry forms, requesting quotes, or communicating via WhatsApp/email. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name and contact details (email address, phone number)</li>
                            <li>Business name and website details</li>
                            <li>Project descriptions, budget preferences, and project requirements</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">2. How We Use Your Information</h2>
                        <p>We use the collected information solely for business purposes, including:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Responding to your project enquiries and requests for proposal</li>
                            <li>Providing client communication, updates, and deliverables</li>
                            <li>Improving our website performance and client experience</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">3. Data Sharing &amp; Third Parties</h2>
                        <p>
                            We do not sell, rent, or trade your personal data to third parties. Data is only shared with service providers (such as hosting or communication infrastructure) necessary to deliver our services.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">4. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@xaggment.com" className="text-blue-600 font-bold hover:underline">hello@xaggment.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPage;
