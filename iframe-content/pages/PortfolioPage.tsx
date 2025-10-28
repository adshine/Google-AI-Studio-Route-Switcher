
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const PortfolioPage: React.FC = () => (
    <PageLayout title="Portfolio">
        <p>Check out some of our recent work.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="border rounded-lg overflow-hidden">
                <img src="https://picsum.photos/600/400?random=4" alt="Project 1" />
                <div className="p-4">
                    <h4 className="font-semibold">Project Alpha</h4>
                    <p className="text-sm text-gray-600">A web application for project management.</p>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <img src="https://picsum.photos/600/400?random=5" alt="Project 2" />
                <div className="p-4">
                    <h4 className="font-semibold">Project Beta</h4>
                    <p className="text-sm text-gray-600">An e-commerce platform for a local business.</p>
                </div>
            </div>
        </div>
    </PageLayout>
);

export default PortfolioPage;
