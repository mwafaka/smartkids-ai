"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Bell, Trash2, Download, Globe, HelpCircle, ChevronRight, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function SettingsPage() {
  const router = useRouter();
  const [showClearData, setShowClearData] = React.useState(false);

  const handleClearData = () => {
    try { localStorage.clear(); } catch { /* ignore */ }
    router.push("/");
  };

  const handleExportData = () => {
    let children: unknown[] = [];
    let favorites: string[] = [];
    try { children = JSON.parse(localStorage.getItem("smartkids_children") || "[]"); } catch { /* ignore */ }
    try { favorites = JSON.parse(localStorage.getItem("smartkids_favorites") || "[]"); } catch { /* ignore */ }
    const data = { children, favorites, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "smartkids-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">Settings</h1>
          <p className="mt-1 text-sm text-neutral-500">Manage your app preferences and data</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-purple-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Daily activity reminders", desc: "Get reminded of daily activities", enabled: true },
              { label: "Weekly progress reports", desc: "Summary of your child&apos;s progress", enabled: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-100 p-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <button
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    item.enabled ? "bg-purple-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      item.enabled ? "left-5.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-purple-600" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button
              onClick={handleExportData}
              className="flex w-full items-center justify-between rounded-xl border border-gray-100 p-4 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Export Data</p>
                  <p className="text-xs text-gray-500">Download all your data as JSON</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>

            <button
              onClick={() => setShowClearData(true)}
              className="flex w-full items-center justify-between rounded-xl border border-red-100 p-4 text-left transition-colors hover:bg-red-50"
            >
              <div className="flex items-center gap-3">
                <Trash2 className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-sm font-medium text-red-600">Clear All Data</p>
                  <p className="text-xs text-gray-500">Remove all profiles, history, and preferences</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-red-400" />
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: HelpCircle, label: "Help Center", desc: "FAQs and support" },
            ].map((item, idx) => (
              <button
                key={idx}
                className="flex w-full items-center justify-between rounded-xl border border-gray-100 p-4 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            ))}
            <div className="rounded-xl bg-gray-50 p-4 text-center text-xs text-gray-400">
              SmartKids AI v1.0.0 — Supporting learning, curiosity, and development
            </div>
          </CardContent>
        </Card>

        <Modal isOpen={showClearData} onClose={() => setShowClearData(false)} title="Clear All Data">
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4">
              <AlertTriangle className="h-5 w-5 shrink-0 text-red-600" />
              <p className="text-sm text-red-700">
                This will permanently delete all child profiles, activity history, favorites, and preferences. This cannot be undone.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowClearData(false)}>
                Cancel
              </Button>
              <Button variant="destructive" className="flex-1" onClick={handleClearData}>
                Clear Everything
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
