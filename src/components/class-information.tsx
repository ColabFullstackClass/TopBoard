import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ClassInformationProps {
  classCode: string
  students: number
  assessments: number
  created: string
}

export function ClassInformation({ classCode, students, assessments, created }: ClassInformationProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="bg-muted/50 py-3">
        <CardTitle className="text-base font-medium text-muted-foreground">Class Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Class Code:</span>
          <span className="text-sm">{classCode}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Students:</span>
          <span className="text-sm">{students}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Assessments:</span>
          <span className="text-sm">{assessments}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Created:</span>
          <span className="text-sm">{created}</span>
        </div>
      </CardContent>
    </Card>
  )
}
