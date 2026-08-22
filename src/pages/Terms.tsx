import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Terms &amp; Conditions | Xaggment Technologies</title>
                <meta name="description" content="Terms &amp; Conditions governing the use of Xaggment Technologies services and website." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <span className="eyebrow-label mb-2 block">Legal</span>
                        <h1 className="section-title mb-4">Terms &amp; Conditions</h1>
                        <p className="text-sm font-bold text-slate-400">Last updated: August 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                        <p>
                            Welcome to Xaggment Technologies. By accessing our website or engaging our services, you agree to comply with and be bound by the following terms and conditions.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">1. Scope of Services</h2>
                        <p>
                            Xaggment Technologies provides digital product development, web development, software engineering, AI automation, and digital marketing services as agreed in specific project agreements or proposals.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">2. Intellectual Property</h2>
                        <p>
                            Upon full payment of project milestone fees, all agreed deliverables, custom source code, assets, and documentation produced for the client shall belong to the client, unless specified otherwise (such as licensed third-party libraries or proprietary prebuilt framework modules).
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">3. Payment Terms</h2>
                        <p>
                            Projects operate on milestone-based or retainer payment structures as outlined in individual proposals. Invoices are due upon receipt unless agreed otherwise in writing.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">4. Client Responsibilities</h2>
                        <p>
                            Clients agree to provide timely feedback, content, logos, access, and approvals required for project completion within agreed timelines.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">5. Contact Information</h2>
                        <p>
                            For questions regarding these Terms &amp; Conditions, email <a href="mailto:hello@xaggment.com" className="text-blue-600 font-bold hover:underline">hello@xaggment.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsPage;
