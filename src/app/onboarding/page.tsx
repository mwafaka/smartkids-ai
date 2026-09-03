"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChildForm } from "@/components/features/child-form";
import type { ChildProfile } from "@/types";

const steps = ["Welcome", "Add Child", "All Set!"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(0);

  const handleChildSubmit = (data: Omit<ChildProfile, "id">) => {
    const newChild: ChildProfile = {
      ...data,
      id: "child_" + Date.now(),
    };

    let existing: ChildProfile[] = [];
    try {
      existing = JSON.parse(localStorage.getItem("smartkids_children") || "[]");
    } catch { /* ignore corrupted data */ }
    existing.push(newChild);
    localStorage.setItem("smartkids_children", JSON.stringify(existing));
    localStorage.setItem("smartkids_selected_child", JSON.stringify(newChild));
    setStep(2);
  };

  const handleFinish = () => {
    localStorage.setItem("smartkids_visited", "true");
    router.push("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i <= step ? "w-8 bg-purple-500" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            {step === 0 && (
              <div className="text-center space-y-6">
                <div className="text-6xl">👋</div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to SmartKids AI!</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Let&apos;s set up your child&apos;s profile so we can provide personalized activity suggestions.
                </p>
                <Button size="lg" onClick={() => setStep(1)}>
                  Let&apos;s Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Add Your First Child</h2>
                <p className="text-gray-500 mb-6">Tell us about your child so we can personalize their experience.</p>
                <ChildForm
                  onSubmit={handleChildSubmit}
                  onCancel={() => setStep(0)}
                />
              </div>
            )}

            {step === 2 && (
              <div className="text-center space-y-6">
                <div className="text-6xl">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900">You&apos;re All Set!</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  We&apos;ll start generating personalized activities for your child. You can always add more children or update profiles later.
                </p>
                <Button size="lg" onClick={handleFinish}>
                  Go to Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {step > 0 && step < 2 && (
          <div className="mt-4 flex justify-center">
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
