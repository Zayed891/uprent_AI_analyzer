import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { ApplicationCard } from "@/components/ApplicationCard";
import { UrgentApplicationCard } from "@/components/UrgentApplicationCard";

import type { Application, AnalyzedApplication } from "@/types/application";
import { analyzeApplications } from "@/api/api";


const mockApplications: Application[] = [
  {
    id: 1,
    tenantName: "Sarah W.",
    profileComplete: true,
    timeToApplyMinutes: 8,
    landlordResponded: false,
    appliedAt: "2026-01-06T08:30:00Z",
  },
  {
    id: 2,
    tenantName: "Emma J.",
    profileComplete: true,
    timeToApplyMinutes: 12,
    landlordResponded: false,
    appliedAt: "2026-01-03T14:00:00Z",
  },
  {
    id: 3,
    tenantName: "Tom R.",
    profileComplete: false,
    timeToApplyMinutes: 90,
    landlordResponded: false,
    appliedAt: "2026-01-05T22:00:00Z",
  },
  {
    id: 4,
    tenantName: "Alex K.",
    profileComplete: true,
    timeToApplyMinutes: 5,
    landlordResponded: true,
    appliedAt: "2026-01-01T06:00:00Z",
  },
   {
    id: 5,
    tenantName: "John K.",
    profileComplete: false,
    timeToApplyMinutes: 10,
    landlordResponded: true,
    appliedAt: "2026-01-08T08:00:00Z",
  },
];

/* ---------------- DASHBOARD ---------------- */

export default function Dashboard() {
  const [applications] = useState<Application[]>(mockApplications);
  const [analyzedApplications, setAnalyzedApplications] =
    useState<AnalyzedApplication[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  async function handleAnalyze() {
    try {
      setIsAnalyzing(true);

      const result = await analyzeApplications(applications);

      setAnalyzedApplications(result.prioritized);
      setIsAnalyzed(true);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] p-6 ">
      
      <div className="mb-6 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold text-[#bc2f4e]">
          Applications Dashboard
        </h1>
        <p className="text-sm text-[#797f8a] mb-8">
          Review and prioritize tenant applications
        </p>
        <Button
        onClick={handleAnalyze}
        disabled={isAnalyzing}
        className="mb-6 bg-[#c03858] text-[#e9bbc5] hover:bg-[#a82f4a]"
      >
        {isAnalyzing ? "Analyzing..." : "Analyze Applications"}
      </Button>
      </div>

      {/* ACTION BUTTON */}
      

      <Separator className="mb-6" />

      {/* CONTENT */}
      <div className="space-y-4">
        {/* LOADING STATE */}
        {isAnalyzing &&
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-lg" />
          ))}

        {/* ANALYZED STATE */}
        {!isAnalyzing && isAnalyzed && (
          <>
            <h2 className="text-lg font-medium text-[#bc2f4e]">
               Applications Needing Attention
            </h2>

            {analyzedApplications.map((app) => (
              <UrgentApplicationCard key={app.id} application={app} />
            ))}
          </>
        )}

        {/* INITIAL STATE */}
        {!isAnalyzing && !isAnalyzed &&
          applications.map((app) => (
            <ApplicationCard key={app.id} application={app} />
          ))}
      </div>
    </div>
  );
}
