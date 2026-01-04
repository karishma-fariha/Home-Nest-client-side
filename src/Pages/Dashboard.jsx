import React from 'react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    PieChart, Pie, Cell, Legend 
} from 'recharts';
import { TrendingUp, Users, Building, Star } from "lucide-react";

// Mock Data for industrial look
const propertyData = [
    { name: 'Jan', listings: 4 },
    { name: 'Feb', listings: 7 },
    { name: 'Mar', listings: 12 },
    { name: 'Apr', listings: 9 },
];

const categoryData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Penthouse', value: 30 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

const Dashboard = () => {
    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "My Listings", val: "12", icon: <Building/>, color: "text-blue-500" },
                    { label: "Total Views", val: "2.4k", icon: <TrendingUp/>, color: "text-green-500" },
                    { label: "Reviews", val: "84", icon: <Star/>, color: "text-orange-500" },
                    { label: "Clients", val: "15", icon: <Users/>, color: "text-purple-500" },
                ].map((stat, i) => (
                    <div key={i} className="card bg-base-100 shadow-sm border border-base-300">
                        <div className="card-body p-6 flex flex-row items-center gap-4">
                            <div className={`p-4 bg-base-200 rounded-2xl ${stat.color}`}>{stat.icon}</div>
                            <div>
                                <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-2xl font-black">{stat.val}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bar Chart */}
                <div className="card bg-base-100 shadow-sm border border-base-300 p-8">
                    <h3 className="font-bold text-lg mb-6 flex items-center gap-2">Listing Growth</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={propertyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                <Tooltip 
                                    cursor={{fill: 'transparent'}} 
                                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} 
                                />
                                <Bar dataKey="listings" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="card bg-base-100 shadow-sm border border-base-300 p-8">
                    <h3 className="font-bold text-lg mb-6">Property Distribution</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={categoryData} 
                                    innerRadius={70} 
                                    outerRadius={100} 
                                    paddingAngle={8} 
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;