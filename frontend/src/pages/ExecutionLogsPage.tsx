import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { http } from "@/lib/http"

interface Execution {
  _id: string
  status: "PENDING" | "COMPLETED"
  startTime: string
  endTime?: string
}

interface ExecutionsResponse {
  executions: Execution[]
}

export default function ExecutionLogsPage() {
  const { workflowId } = useParams<{ workflowId: string }>()
  const navigate = useNavigate()
  const [executions, setExecutions] = useState<Execution[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!workflowId) return

    const fetchExecutions = async () => {
      setLoading(true)
      setError(null)
      try {
        const body = await http.get<ExecutionsResponse>(
          `/workflow/execution/${workflowId}`,
          { auth: true },
        )
        setExecutions(body.executions ?? [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchExecutions()
  }, [workflowId])

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Execution logs
            </h1>
            <p className="text-sm text-muted-foreground">
              Workflow ID: <span className="font-mono">{workflowId}</span>
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate("/workflows")}>
            Back to workflows
          </Button>
        </div>

        {loading && <p className="text-sm text-muted-foreground">Loading...</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}

        {!loading && !error && (
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="grid grid-cols-4 gap-2 px-4 py-2 text-xs font-medium text-muted-foreground border-b">
              <span>Status</span>
              <span>Start time</span>
              <span>End time</span>
              <span>Duration</span>
            </div>
            {executions.map((exe) => {
              const start = new Date(exe.startTime)
              const end = exe.endTime ? new Date(exe.endTime) : null
              const durationMs = end ? end.getTime() - start.getTime() : null

              return (
                <div
                  key={exe._id}
                  className="grid grid-cols-4 gap-2 px-4 py-2 text-sm border-b last:border-b-0"
                >
                  <span
                    className={
                      exe.status === "COMPLETED"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-amber-600 dark:text-amber-400"
                    }
                  >
                    {exe.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {start.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {end ? end.toLocaleString() : "—"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {durationMs != null
                      ? `${Math.round(durationMs / 1000)}s`
                      : "—"}
                  </span>
                </div>
              )
            })}

            {executions.length === 0 && (
              <div className="px-4 py-8 text-sm text-muted-foreground text-center">
                No executions found for this workflow yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


