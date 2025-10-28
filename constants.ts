
import type { AppRoute } from './types';
import HomePage from './iframe-content/pages/HomePage';
import AboutPage from './iframe-content/pages/AboutPage';
import ServicesPage from './iframe-content/pages/ServicesPage';
import ContactPage from './iframe-content/pages/ContactPage';
import PricingPage from './iframe-content/pages/PricingPage';
import BlogPage from './iframe-content/pages/BlogPage';
import CareersPage from './iframe-content/pages/CareersPage';
import FaqPage from './iframe-content/pages/FaqPage';
import TeamPage from './iframe-content/pages/TeamPage';
import PortfolioPage from './iframe-content/pages/PortfolioPage';

export const APP_ROUTES: AppRoute[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About Us', component: AboutPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
  { path: '/pricing', name: 'Pricing', component: PricingPage },
  { path: '/blog', name: 'Blog', component: BlogPage },
  { path: '/team', name: 'Our Team', component: TeamPage },
  { path: '/careers', name: 'Careers', component: CareersPage },
  { path: '/faq', name: 'FAQ', component: FaqPage },
  { path: '/contact', name: 'Contact Us', component: ContactPage },
];
