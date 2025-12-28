import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { http } from "@/lib/http"

interface WorkflowNode {
  id: string
}

interface Workflow {
  _id: string
  nodes: WorkflowNode[]
  edges: { id: string }[]
}

export default function WorkflowsPage() {
  const navigate = useNavigate()
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWorkflows = async () => {
      setLoading(true)
      setError(null)
      try {
        const body = await http.get<Workflow[]>("/allworkflows")
        setWorkflows(body)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflows()
  }, [])

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Workflows
            </h1>
            <p className="text-sm text-muted-foreground">
              View all saved workflows and inspect their executions.
            </p>
          </div>
          <Button onClick={() => navigate("/dashboard")}>
            Create new workflow
          </Button>
        </div>

        {loading && <p className="text-sm text-muted-foreground">Loading...</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}

        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2">
            {workflows.map((wf) => (
              <div
                key={wf._id}
                className="border rounded-lg p-4 bg-card flex flex-col gap-3 shadow-sm"
              >
                <div>
                  <h2 className="font-medium truncate">
                    Workflow {wf._id.slice(-6)}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {wf.nodes?.length ?? 0} nodes · {wf.edges?.length ?? 0} edges
                  </p>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate(`/workflows/${wf._id}`)}
                  >
                    Open workflow
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      navigate(`/workflows/${wf._id}/executions`)
                    }
                  >
                    View executions
                  </Button>
                </div>
              </div>
            ))}

            {workflows.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No workflows found yet. Create your first one from the dashboard.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


