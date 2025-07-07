import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuickStatsProps {
  averageGrade: number
  submissionsPending: number
  activeStudents: number
}

export function QuickStats({ averageGrade, submissionsPending, activeStudents }: QuickStatsProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="bg-muted/50 py-3">
        <CardTitle className="text-base font-medium text-muted-foreground">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Average Grade:</span>
          <span className="text-sm font-medium text-green-600">{averageGrade.toFixed(1)}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Submissions Pending:</span>
          <span className="text-sm font-medium text-red-600">{submissionsPending}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Active Students:</span>
          <span className="text-sm font-medium text-green-600">{activeStudents}</span>
        </div>
      </CardContent>
    </Card>
  )
}
