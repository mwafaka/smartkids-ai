"use client";

import * as React from "react";
import { Users, Baby, Activity, MessageSquare, TrendingUp, BarChart3, Settings, Shield, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STATS = [
  { label: "Total Users", value: "1,247", change: "+12%", icon: Users, color: "bg-purple-100 text-purple-600" },
  { label: "Total Children", value: "2,891", change: "+18%", icon: Baby, color: "bg-pink-100 text-pink-600" },
  { label: "Activities Done", value: "15,432", change: "+24%", icon: Activity, color: "bg-green-100 text-green-600" },
  { label: "AI Queries Today", value: "3,567", change: "+8%", icon: MessageSquare, color: "bg-blue-100 text-blue-600" },
];

const RECENT_USERS = [
  { name: "Sarah Johnson", email: "sarah@example.com", plan: "PRO", children: 2, joined: "2 hours ago", status: "active" },
  { name: "Mike Chen", email: "mike@example.com", plan: "FREE", children: 1, joined: "5 hours ago", status: "active" },
  { name: "Emily Davis", email: "emily@example.com", plan: "FAMILY", children: 3, joined: "1 day ago", status: "active" },
  { name: "James Wilson", email: "james@example.com", plan: "FREE", children: 1, joined: "2 days ago", status: "active" },
  { name: "Anna Brown", email: "anna@example.com", plan: "PRO", children: 2, joined: "3 days ago", status: "active" },
];

const TOP_ACTIVITIES = [
  { title: "Dinosaur Math Adventure", completions: 845, rating: 4.8 },
  { title: "Kitchen Science: Color Mixing", completions: 723, rating: 4.9 },
  { title: "Story Building Chain", completions: 654, rating: 4.7 },
  { title: "Nature Scavenger Hunt", completions: 612, rating: 4.8 },
  { title: "Feelings Charades", completions: 589, rating: 4.6 },
];

const SYSTEM_ALERTS = [
  { type: "info", message: "New feature: Weekly learning plans now available for Pro users", time: "1 hour ago" },
  { type: "warning", message: "API rate limit approaching for free tier (85% used)", time: "3 hours ago" },
  { type: "success", message: "System update deployed successfully - v2.1.0", time: "6 hours ago" },
  { type: "error", message: "Failed payment attempts: 3 users affected", time: "12 hours ago" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">SmartKids Admin</h1>
              <p className="text-xs text-gray-500">Administration Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Link href="/home">
              <Button variant="ghost" size="sm">Back to App</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-green-600">{stat.change} this month</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                User Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-48">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((month, i) => {
                  const heights = [20, 35, 45, 55, 65, 75, 85, 100];
                  return (
                    <div key={month} className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-full flex justify-center">
                        <div
                          className="w-full max-w-8 rounded-t-lg bg-gradient-to-t from-purple-500 to-pink-500"
                          style={{ height: `${heights[i]}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{month}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Subscription Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { tier: "Free", count: 892, percent: 71.5, color: "bg-gray-400" },
                { tier: "Pro", count: 267, percent: 21.4, color: "bg-purple-500" },
                { tier: "Family", count: 88, percent: 7.1, color: "bg-pink-500" },
              ].map((item) => (
                <div key={item.tier} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.tier}</span>
                    <span className="text-gray-500">{item.count} users ({item.percent}%)</span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-100">
                    <div className={`h-3 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {TOP_ACTIVITIES.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-sm font-bold text-purple-600">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                      <p className="text-xs text-gray-500">{activity.completions} completions</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      ⭐ {activity.rating}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {SYSTEM_ALERTS.map((alert, idx) => (
                  <div key={idx} className={`rounded-xl border p-3 ${
                    alert.type === "info" ? "border-blue-200 bg-blue-50" :
                    alert.type === "warning" ? "border-amber-200 bg-amber-50" :
                    alert.type === "success" ? "border-green-200 bg-green-50" :
                    "border-red-200 bg-red-50"
                  }`}>
                    <p className={`text-sm font-medium ${
                      alert.type === "info" ? "text-blue-800" :
                      alert.type === "warning" ? "text-amber-800" :
                      alert.type === "success" ? "text-green-800" :
                      "text-red-800"
                    }`}>
                      {alert.type === "info" ? "ℹ️" : alert.type === "warning" ? "⚠️" : alert.type === "success" ? "✅" : "❌"} {alert.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{alert.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 text-left font-semibold text-gray-500">User</th>
                      <th className="pb-3 text-left font-semibold text-gray-500">Plan</th>
                      <th className="pb-3 text-left font-semibold text-gray-500">Children</th>
                      <th className="pb-3 text-left font-semibold text-gray-500">Joined</th>
                      <th className="pb-3 text-left font-semibold text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {RECENT_USERS.map((user, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="py-3">
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </td>
                        <td className="py-3">
                          <Badge variant={user.plan === "PRO" ? "default" : user.plan === "FAMILY" ? "secondary" : "outline"}>
                            {user.plan}
                          </Badge>
                        </td>
                        <td className="py-3 text-gray-600">{user.children}</td>
                        <td className="py-3 text-gray-500">{user.joined}</td>
                        <td className="py-3">
                          <Badge variant="success" className="capitalize">{user.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="border-dashed border-2 border-gray-200">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Settings className="h-8 w-8 text-gray-400 mb-2" />
              <h3 className="font-bold text-gray-900">System Settings</h3>
              <p className="text-sm text-gray-500">Configure app settings</p>
              <Button variant="outline" size="sm" className="mt-3">Manage</Button>
            </CardContent>
          </Card>
          <Card className="border-dashed border-2 border-gray-200">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Activity className="h-8 w-8 text-gray-400 mb-2" />
              <h3 className="font-bold text-gray-900">Content Management</h3>
              <p className="text-sm text-gray-500">Manage activities library</p>
              <Button variant="outline" size="sm" className="mt-3">Manage</Button>
            </CardContent>
          </Card>
          <Card className="border-dashed border-2 border-gray-200">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Users className="h-8 w-8 text-gray-400 mb-2" />
              <h3 className="font-bold text-gray-900">User Management</h3>
              <p className="text-sm text-gray-500">View and manage users</p>
              <Button variant="outline" size="sm" className="mt-3">Manage</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
