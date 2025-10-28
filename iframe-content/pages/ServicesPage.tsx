
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const ServicesPage: React.FC = () => (
    <PageLayout title="Our Services">
        <p>We offer a wide range of services to meet your needs. Our team is skilled in various areas to provide you with the best solutions.</p>
        <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Solutions</li>
        </ul>
    </PageLayout>
);

export default ServicesPage;
