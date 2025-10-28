
import React from 'react';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <div className="prose max-w-none text-gray-700">
            {children}
        </div>
    </div>
);

const TeamPage: React.FC = () => (
    <PageLayout title="Our Team">
        <p>Meet the amazing people behind our success.</p>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="text-center">
                <img src="https://picsum.photos/200/200?random=1" alt="Team member" className="w-32 h-32 rounded-full mx-auto" />
                <h4 className="font-semibold mt-4">Jane Doe</h4>
                <p className="text-sm text-gray-500">CEO</p>
            </div>
            <div className="text-center">
                <img src="https://picsum.photos/200/200?random=2" alt="Team member" className="w-32 h-32 rounded-full mx-auto" />
                <h4 className="font-semibold mt-4">John Smith</h4>
                <p className="text-sm text-gray-500">CTO</p>
            </div>
            <div className="text-center">
                <img src="https://picsum.photos/200/200?random=3" alt="Team member" className="w-32 h-32 rounded-full mx-auto" />
                <h4 className="font-semibold mt-4">Emily Jones</h4>
                <p className="text-sm text-gray-500">Lead Designer</p>
            </div>
        </div>
    </PageLayout>
);

export default TeamPage;
