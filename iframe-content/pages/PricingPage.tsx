
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const PricingPage: React.FC = () => (
    <PageLayout title="Our Pricing">
        <p>We offer competitive pricing plans for all our services. Choose the one that fits you best.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="border p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-4xl font-extrabold my-4">$10<span className="text-base font-medium">/mo</span></p>
                <ul className="text-left space-y-2"><li>Feature 1</li><li>Feature 2</li></ul>
            </div>
            <div className="border p-6 rounded-lg text-center border-blue-500 ring-2 ring-blue-500">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-4xl font-extrabold my-4">$25<span className="text-base font-medium">/mo</span></p>
                <ul className="text-left space-y-2"><li>All Basic Features</li><li>Feature 3</li><li>Feature 4</li></ul>
            </div>
            <div className="border p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-4xl font-extrabold my-4">$50<span className="text-base font-medium">/mo</span></p>
                <ul className="text-left space-y-2"><li>All Pro Features</li><li>Dedicated Support</li></ul>
            </div>
        </div>
    </PageLayout>
);

export default PricingPage;
