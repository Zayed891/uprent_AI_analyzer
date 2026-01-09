import { Card, CardContent } from "@/components/ui/card";
import type { Application } from "@/types/application";

interface Props {
  application: Application;
}

export function ApplicationCard({ application }: Props) {
  const hoursAgo = Math.floor(
    (Date.now() - new Date(application.appliedAt).getTime()) /
      (1000 * 60 * 60)
  );

  return (
    <Card className="bg-white">
      <CardContent className="p-4 space-y-1">
        <p className="font-medium text-gray-900">
          {application.tenantName}
        </p>

        <p className="text-sm text-gray-600">
          Applied {hoursAgo} hours ago
        </p>

        <p className="text-sm text-gray-600">
          Profile:{" "}
          <span className="font-medium">
            {application.profileComplete ? "Complete" : "Incomplete"}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
