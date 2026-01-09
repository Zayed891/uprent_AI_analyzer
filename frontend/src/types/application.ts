

export interface Application {
  id: number;
  tenantName: string;
  profileComplete: boolean;
  timeToApplyMinutes: number;
  landlordResponded: boolean;
  appliedAt: string; // ISO string
}

export interface AnalyzedApplication {
  id: number;
  tenantName: string;
  urgencyScore: number;
  reason: string;
  risk: string;
}
