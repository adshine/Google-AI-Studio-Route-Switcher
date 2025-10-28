
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const FaqPage: React.FC = () => (
    <PageLayout title="Frequently Asked Questions">
        <div className="space-y-4">
            <div>
                <h4 className="font-semibold">What services do you offer?</h4>
                <p>We offer a wide range of services including web development, mobile app development, and UI/UX design.</p>
            </div>
            <div>
                <h4 className="font-semibold">What is your pricing?</h4>
                <p>We have flexible pricing plans. Please visit our pricing page for more details.</p>
            </div>
        </div>
    </PageLayout>
);

export default FaqPage;
