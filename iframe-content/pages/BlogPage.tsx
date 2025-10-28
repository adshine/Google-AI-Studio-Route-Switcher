
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const BlogPage: React.FC = () => (
    <PageLayout title="Company Blog">
        <p>Read our latest news and articles.</p>
        <div className="space-y-8 mt-6">
            <div className="border-b pb-4">
                <h3 className="text-2xl font-semibold">Our Journey to the Cloud</h3>
                <p className="text-sm text-gray-500">Published on August 1, 2024</p>
                <p className="mt-2">Read about our latest migration and how we leveraged cloud technology to improve our services...</p>
            </div>
            <div className="border-b pb-4">
                <h3 className="text-2xl font-semibold">Top 5 Design Trends in 2024</h3>
                <p className="text-sm text-gray-500">Published on July 15, 2024</p>
                <p className="mt-2">Discover the latest trends in UI/UX design that are shaping the digital landscape...</p>
            </div>
        </div>
    </PageLayout>
);

export default BlogPage;
