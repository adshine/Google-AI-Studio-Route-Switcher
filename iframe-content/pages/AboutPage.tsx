
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const AboutPage: React.FC = () => (
    <PageLayout title="About Us">
        <p>We are a team of passionate individuals committed to making a difference. Our company was founded in 2024 with the goal of revolutionizing the industry through innovation and dedication.</p>
        <p>Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Duis porttitor metus a est vulputate, nec aliquam diam dictum. Praesent eget enim id enim euismod tincidunt. Pellentesque ultrices, magna sit amet volutpat laoreet, magna quam pulvinar ex, et varius nibh ex sit amet nunc.</p>
    </PageLayout>
);

export default AboutPage;
