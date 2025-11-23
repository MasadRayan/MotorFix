"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Users,
    Calendar,
    DollarSign,
    Package,
    CheckCircle,
    Clock,
    XCircle,
    TrendingUp
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

const AdminHome = () => {
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const session = useSession();
    const email = session?.data?.user?.email;

    useEffect(() => {
        if (!email) {
            setLoading(false);
            return;
        }

        const fetchOverview = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    `https://motofix-server.vercel.app/api/admin/overview/${email}`
                );
                setOverview(res.data);
                setError(null);
            } catch (err) {
                setError("Failed to load overview data");
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
                    <p className="text-lg text-gray-600">Loading Dashboard...</p>
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

    return (
        <section className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Admin Dashboard
                        </h1>
                        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-lg shadow-md border-l-4 border-[#FF3811]">
                        <p className="text-sm text-gray-600">Today's Bookings</p>
                        <p className="text-2xl font-bold text-[#FF3811]">{overview.todaysBookings}</p>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Users"
                        value={overview.totalUsers}
                        icon={Users}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-600"
                    />
                    <StatCard
                        title="Total Bookings"
                        value={overview.totalBookings}
                        icon={Calendar}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-600"
                    />
                    <StatCard
                        title="Total Services"
                        value={overview.totalServices}
                        icon={Package}
                        gradient="bg-gradient-to-br from-green-500 to-green-600"
                    />
                    <StatCard
                        title="Total Revenue"
                        value={overview.totalCashflow.toFixed(2)}
                        icon={DollarSign}
                        gradient="bg-gradient-to-br from-[#FF3811] to-[#e63310]"
                        suffix="$"
                    />
                </div>

                {/* Booking Status Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Status Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatusCard
                            title="Pending Bookings"
                            value={overview.pending}
                            icon={Clock}
                            color="#f59e0b"
                        />
                        <StatusCard
                            title="Accepted Bookings"
                            value={overview.accepted}
                            icon={CheckCircle}
                            color="#10b981"
                        />
                        <StatusCard
                            title="Rejected Bookings"
                            value={overview.rejected}
                            icon={XCircle}
                            color="#ef4444"
                        />
                    </div>
                </div>

                {/* Chart Section */}
                <Card className="shadow-xl border-none">
                    <CardHeader className="bg-linear-to-r from-[#FF3811] to-[#e63310] text-white rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-bold">Booking Trends</CardTitle>
                                <p className="text-white/80 text-sm mt-1">Last 7 days performance</p>
                            </div>
                            <TrendingUp className="h-8 w-8" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={overview.last7Days}
                                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis
                                        dataKey="_id"
                                        stroke="#6b7280"
                                        style={{ fontSize: '12px' }}
                                    />
                                    <YAxis
                                        stroke="#6b7280"
                                        style={{ fontSize: '12px' }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                        }}
                                        labelStyle={{ color: '#374151', fontWeight: 'bold' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#FF3811"
                                        strokeWidth={3}
                                        dot={{ fill: '#FF3811', strokeWidth: 2, r: 5 }}
                                        activeDot={{ r: 7 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default AdminHome;