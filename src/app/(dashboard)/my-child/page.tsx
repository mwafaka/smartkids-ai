"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Plus, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ChildProfileCard } from "@/components/features/child-profile-card";
import { ChildForm } from "@/components/features/child-form";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAppStore } from "@/stores/app-store";
import { calculateAge } from "@/lib/utils";
import type { ChildProfile } from "@/types";

export default function MyChildPage() {
  const router = useRouter();
  const { children, setChildren, setSelectedChild, selectedChild } = useAppStore();
  const [showForm, setShowForm] = React.useState(false);
  const [editingChild, setEditingChild] = React.useState<ChildProfile | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState<string | null>(null);

  const handleSubmit = (data: Omit<ChildProfile, "id">) => {
    if (editingChild) {
      const updated = children.map((c) =>
        c.id === editingChild.id ? { ...c, ...data } : c
      );
      setChildren(updated);
    } else {
      const newChild: ChildProfile = {
        ...data,
        id: Date.now().toString(),
      };
      setChildren([...children, newChild]);
    }
    setShowForm(false);
    setEditingChild(null);
  };

  const handleDelete = (id: string) => {
    setChildren(children.filter((c) => c.id !== id));
    setShowDeleteConfirm(null);
  };

  const handleEdit = (child: ChildProfile) => {
    setEditingChild(child);
    setShowForm(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Children</h1>
            <p className="mt-1 text-gray-500">Manage profiles and track development</p>
          </div>
          <Button onClick={() => { setEditingChild(null); setShowForm(true); }}>
            <Plus className="h-4 w-4" />
            Add Child
          </Button>
        </div>

        {children.length === 0 ? (
          <Card className="border-2 border-dashed border-purple-200">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                <Baby className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">No Child Profiles Yet</h3>
              <p className="mb-4 max-w-sm text-sm text-gray-500">
                Create a profile for your child to get personalized activity recommendations based on their age, interests, and skills you want to develop.
              </p>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4" />
                Create First Profile
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {children.map((child) => (
              <ChildProfileCard
                key={child.id}
                child={child}
                isSelected={selectedChild?.id === child.id}
                onSelect={(c) => {
                  setSelectedChild(c);
                  router.push("/activities");
                }}
                onEdit={handleEdit}
                onDelete={(c) => setShowDeleteConfirm(c.id)}
              />
            ))}
          </div>
        )}

        {selectedChild && (
          <Card className="border-purple-100 bg-purple-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Currently Viewing: {selectedChild.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Activities and recommendations are personalized for {selectedChild.name} (age {calculateAge(selectedChild.dateOfBirth)}).
              </p>
            </CardContent>
          </Card>
        )}

        <Modal
          isOpen={showForm}
          onClose={() => { setShowForm(false); setEditingChild(null); }}
          title={editingChild ? `Edit ${editingChild.name}'s Profile` : "Add New Child"}
          className="max-w-2xl"
        >
          <ChildForm
            initialData={editingChild || undefined}
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setEditingChild(null); }}
          />
        </Modal>

        <Modal
          isOpen={!!showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(null)}
          title="Delete Profile"
        >
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this profile? This will also delete all associated activity history and progress. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button variant="destructive" className="flex-1" onClick={() => showDeleteConfirm && handleDelete(showDeleteConfirm)}>
                Delete Profile
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
