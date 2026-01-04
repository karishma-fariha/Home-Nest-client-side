import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-base-200">
            {/* Fixed Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Sub-header for the dashboard */}
                <header className="h-16 bg-base-100 border-b border-base-300 flex items-center px-10 justify-between">
                    <p className="text-sm font-bold opacity-50 uppercase tracking-[0.2em]">Management Portal</p>
                    <div className="flex items-center gap-3">
                         <div className="badge badge-outline gap-2 py-3 px-4">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                            System Live
                         </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="p-10 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;