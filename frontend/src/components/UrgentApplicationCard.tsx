import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AnalyzedApplication } from "@/types/application";
import { cn } from "@/lib/utils";

interface Props {
    application: AnalyzedApplication;
}

export function UrgentApplicationCard({ application }: Props) {
    const urgencyClass =
        application.urgencyScore >= 80
            ? "border-l-4 border-[#c03858] bg-[#fff5f7]"
            : application.urgencyScore >= 50
                ? "border-l-4 border-yellow-400 bg-yellow-50"
                : "border-l-4 border-gray-300 bg-white";

    return (
        <Card className={cn("bg-white", urgencyClass)}>
            <CardContent className="p-4 space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <p className="font-medium text-gray-900">
                        {application.tenantName}
                    </p>

                    <Badge className="bg-[#c03858] text-[#e9bbc5]">
                        {application.urgencyScore}/100
                    </Badge>
                </div>

                {/* AI Explanation */}
                <div className="text-sm space-y-1">
                    <p>
                        <span className="font-medium">Reason:</span>{" "}
                        {application.reason}
                    </p>
                    <p>
                        <span className="font-medium">Risk:</span>{" "}
                        {application.risk}
                    </p>
                </div>

                {/* CTA */}
                <Button
                    size="sm"
                    className="bg-[#c03858] text-[#e9bbc5] hover:bg-[#a82f4a]"
                >
                    Respond Now
                </Button>
            </CardContent>
        </Card>
    );
}
