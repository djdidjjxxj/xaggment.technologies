import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Insights from './pages/Insights';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';

import type { ReactNode } from 'react';

export interface RouteConfig {
    name: string;
    path: string;
    element: ReactNode;
    public?: boolean;
}

export const routes: RouteConfig[] = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
        public: true,
    },
    {
        name: 'Services',
        path: '/services',
        element: <Services />,
        public: true,
    },
    {
        name: 'Services - Web Dev',
        path: '/services/web-development',
        element: <Services />,
        public: true,
    },
    {
        name: 'Services - Software Dev',
        path: '/services/software-development',
        element: <Services />,
        public: true,
    },
    {
        name: 'Services - App Dev',
        path: '/services/app-development',
        element: <Services />,
        public: true,
    },
    {
        name: 'Services - AI Automation',
        path: '/services/ai-automation',
        element: <Services />,
        public: true,
    },
    {
        name: 'Services - Digital Marketing',
        path: '/services/digital-marketing',
        element: <Services />,
        public: true,
    },
    {
        name: 'Work',
        path: '/work',
        element: <Work />,
        public: true,
    },
    {
        name: 'Pricing',
        path: '/pricing',
        element: <Pricing />,
        public: true,
    },
    {
        name: 'About',
        path: '/about',
        element: <About />,
        public: true,
    },
    {
        name: 'Insights',
        path: '/insights',
        element: <Insights />,
        public: true,
    },
    {
        name: 'Blog Detail',
        path: '/insights/:id',
        element: <BlogDetail />,
        public: true,
    },
    {
        name: 'Blog Detail Legacy',
        path: '/blog/:id',
        element: <BlogDetail />,
        public: true,
    },
    {
        name: 'Contact',
        path: '/contact',
        element: <Contact />,
        public: true,
    },
    {
        name: 'Privacy Policy',
        path: '/privacy',
        element: <Privacy />,
        public: true,
    },
    {
        name: 'Terms & Conditions',
        path: '/terms',
        element: <Terms />,
        public: true,
    },
    {
        name: 'Refund Policy',
        path: '/refund-policy',
        element: <Refund />,
        public: true,
    },
];
