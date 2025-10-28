
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const CareersPage: React.FC = () => (
    <PageLayout title="Careers">
        <p>Join our team and build the future with us. We are always looking for talented individuals.</p>
        <div className="mt-6">
            <h3 className="text-2xl font-semibold">Open Positions</h3>
            <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Senior Frontend Engineer</li>
                <li>Backend Developer (Node.js)</li>
                <li>Product Manager</li>
            </ul>
        </div>
    </PageLayout>
);

export default CareersPage;
