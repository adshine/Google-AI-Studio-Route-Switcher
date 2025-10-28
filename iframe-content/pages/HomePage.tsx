
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const HomePage: React.FC = () => (
    <PageLayout title="Welcome to Our Homepage">
        <p>This is the main landing page of our awesome website. We are dedicated to providing the best services and products to our customers. Explore our site to learn more about what we have to offer.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        <img src="https://picsum.photos/800/400" alt="Random placeholder" className="rounded-lg my-4" />
    </PageLayout>
);

export default HomePage;
