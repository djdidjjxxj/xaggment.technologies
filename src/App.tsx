import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import Loader from '@/components/Loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SocialFloating from '@/components/SocialFloating';

import { routes } from './routes';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    // Safety net: always show content after 1.8 seconds even if Loader animation fails
    useEffect(() => {
        const fallback = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(fallback);
    }, []);

    return (
        <Router basename="/xaggment.technologies">
            {loading && <Loader onComplete={() => setLoading(false)} />}
            <IntersectObserver />
            {/* Content is always rendered; Loader is a fixed overlay on top */}
            <div className={`flex flex-col min-h-screen transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
                <SocialFloating />
            </div>
            <Toaster />
        </Router>
    );
};

export default App;
