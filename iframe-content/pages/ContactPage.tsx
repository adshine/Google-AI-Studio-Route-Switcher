
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const ContactPage: React.FC = () => (
    <PageLayout title="Contact Us">
        <p>Get in touch with us! We'd love to hear from you.</p>
        <form className="mt-4 space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
        </form>
    </PageLayout>
);

export default ContactPage;
