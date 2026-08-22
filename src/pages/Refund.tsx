import React from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Refund &amp; Cancellation Policy | Xaggment Technologies</title>
                <meta name="description" content="Refund and cancellation terms for projects with Xaggment Technologies." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div>
                        <span className="eyebrow-label mb-2 block">Legal</span>
                        <h1 className="section-title mb-4">Refund &amp; Cancellation Policy</h1>
                        <p className="text-sm font-bold text-slate-400">Last updated: August 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                        <p>
                            At Xaggment Technologies, we are committed to delivering high-quality web development, software, AI automation, and digital marketing services. This policy outlines our terms regarding project cancellations and refunds.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">1. Initial Project Deposit</h2>
                        <p>
                            Initial deposits or upfront milestone payments cover discovery, planning, design concepts, and initial architecture allocation. Deposits are non-refundable once work on the project has commenced.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">2. Project Cancellation</h2>
                        <p>
                            Clients may request project cancellation in writing before subsequent development milestones commence. In such cases, the client will only be billed for completed work and delivered milestones up to the cancellation date.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">3. Monthly Retainers &amp; Marketing Services</h2>
                        <p>
                            Monthly digital marketing or maintenance retainers can be cancelled with 14 days' notice prior to the start of the next billing cycle. No partial refunds are issued for mid-month cancellations once the billing cycle has begun.
                        </p>

                        <h2 className="text-xl font-bold text-[#0a0f1e] pt-4">4. Contact &amp; Resolution</h2>
                        <p>
                            If you have concerns about your project progress or billing, please reach out directly to <a href="mailto:hello@xaggment.com" className="text-blue-600 font-bold hover:underline">hello@xaggment.com</a> or message us on WhatsApp so we can work together to resolve any issues.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RefundPage;
