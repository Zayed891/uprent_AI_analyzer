

import type { Application, AnalyzedApplication } from "@/types/application";

const BASE_URL = "http://localhost:3000";

export async function analyzeApplications(
  applications: Application[]
): Promise<{ prioritized: AnalyzedApplication[] }> {
  const response = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ applications })
  });

  if (!response.ok) {
    throw new Error("Failed to analyze applications");
  }

  return response.json();
}
