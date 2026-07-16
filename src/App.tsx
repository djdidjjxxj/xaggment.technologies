import React, { useState } from 'react';
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

    return (
        <Router basename="/xaggment.technologies">
            {loading && <Loader onComplete={() => setLoading(false)} />}
            <IntersectObserver />
            <div className={`flex flex-col min-h-screen ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
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
