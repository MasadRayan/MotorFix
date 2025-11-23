"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
    Calendar, 
    DollarSign, 
    Clock, 
    CheckCircle, 
    XCircle,
    Package,
    TrendingUp,
    User
} from "lucide-react";
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from "recharts";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserHome = () => {
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const session = useSession();
    const email = session?.data?.user?.email;
    const photoURL = session?.data?.user?.image;

    useEffect(() => {
        if (!email) {
            setLoading(false);
            return;
        }

        const fetchOverview = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://motofix-server.vercel.app/api/user/overview/${email}`
                );
                setOverview(res.data);
                setError(null);
            } catch (err) {
                setError("Failed to load your dashboard data");
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOverview();
    }, [email]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#FF3811] border-r-transparent mb-4"></div>
                    <p className="text-lg text-gray-600">Loading Your Dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <p className="text-xl text-red-500">{error}</p>
                </div>
            </div>
        );
    }

    if (!overview) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-gray-500">No Data Found</p>
            </div>
        );
    }

    const StatCard = ({ title, value, icon: Icon, gradient, suffix = "" }) => (
        <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className={`absolute inset-0 ${gradient} opacity-5`}></div>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">{title}</p>
                        <h3 className="text-3xl font-bold text-gray-900">
                            {suffix}{value}
                        </h3>
                    </div>
                    <div className={`${gradient} p-4 rounded-2xl`}>
                        <Icon className="h-8 w-8 text-white" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    const StatusCard = ({ title, value, icon: Icon, color }) => (
        <Card className="border-l-4 shadow-md hover:shadow-lg transition-shadow duration-300" style={{ borderLeftColor: color }}>
            <CardContent className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                    </div>
                    <Icon className="h-10 w-10" style={{ color }} />
                </div>
            </CardContent>
        </Card>
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "Accepted":
                return "bg-green-100 text-green-700 border-green-300";
            case "Pending":
                return "bg-yellow-100 text-yellow-700 border-yellow-300";
            case "Rejected":
                return "bg-red-100 text-red-700 border-red-300";
            default:
                return "bg-gray-100 text-gray-700 border-gray-300";
        }
    };

    return (
        <section className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Welcome Header */}
                <div className="bg-linear-to-r from-[#FF3811] to-[#e63310] rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">
                                Welcome back, {overview.userName}! 
                            </h1>
                            <p className="text-white/90 text-lg">
                                Here's an overview of your car service bookings
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                                <Image
                                    src={photoURL || '/assets/default-user.png'}
                                    alt="User Avatar"
                                    width={100}
                                    height={100}
                                    className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Bookings"
                        value={overview.totalBookings}
                        icon={Calendar}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-600"
                    />
                    <StatCard
                        title="Pending"
                        value={overview.pendingBookings}
                        icon={Clock}
                        gradient="bg-gradient-to-br from-yellow-500 to-yellow-600"
                    />
                    <StatCard
                        title="Completed"
                        value={overview.acceptedBookings}
                        icon={CheckCircle}
                        gradient="bg-gradient-to-br from-green-500 to-green-600"
                    />
                    <StatCard
                        title="Total Spent"
                        value={overview.totalSpent.toFixed(2)}
                        icon={DollarSign}
                        gradient="bg-gradient-to-br from-[#FF3811] to-[#e63310]"
                        suffix="$"
                    />
                </div>

                {/* Chart and Recent Bookings Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Booking Trend Chart */}
                    <Card className="shadow-xl border-none">
                        <CardHeader className="bg-linear-to-r from-[#FF3811] to-[#e63310] text-white rounded-t-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-xl font-bold">Your Booking Activity</CardTitle>
                                    <p className="text-white/80 text-sm mt-1">Last 7 days</p>
                                </div>
                                <TrendingUp className="h-6 w-6" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart 
                                        data={overview.last7Days}
                                        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis 
                                            dataKey="_id" 
                                            stroke="#6b7280"
                                            style={{ fontSize: '11px' }}
                                        />
                                        <YAxis 
                                            stroke="#6b7280"
                                            style={{ fontSize: '11px' }}
                                        />
                                        <Tooltip 
                                            contentStyle={{
                                                backgroundColor: '#fff',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="total" 
                                            stroke="#FF3811" 
                                            strokeWidth={3}
                                            dot={{ fill: '#FF3811', strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 6 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Bookings */}
                    <Card className="shadow-xl border-none">
                        <CardHeader className="bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                            <CardTitle className="text-xl font-bold flex items-center gap-2">
                                <Package className="h-6 w-6" />
                                Recent Bookings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4 max-h-64 overflow-y-auto">
                                {overview.recentBookings.length > 0 ? (
                                    overview.recentBookings.map((booking) => (
                                        <div 
                                            key={booking._id}
                                            className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <img
                                                src={booking.serviceImg}
                                                alt={booking.serviceName}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-900 truncate">
                                                    {booking.serviceName}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(booking.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="font-bold text-[#FF3811]">
                                                    ${booking.servicePrice}
                                                </span>
                                                <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                        <p>No bookings yet</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Status Summary */}
                <Card className="shadow-xl border-none">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                            Booking Status Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatusCard
                                title="Pending Bookings"
                                value={overview.pendingBookings}
                                icon={Clock}
                                color="#f59e0b"
                            />
                            <StatusCard
                                title="Accepted Bookings"
                                value={overview.acceptedBookings}
                                icon={CheckCircle}
                                color="#10b981"
                            />
                            <StatusCard
                                title="Rejected Bookings"
                                value={overview.rejectedBookings}
                                icon={XCircle}
                                color="#ef4444"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default UserHome;