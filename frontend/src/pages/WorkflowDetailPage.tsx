import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ReactFlow } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { Button } from "@/components/ui/button"
import { http } from "@/lib/http"
import Pricetrigger from "@/nodes/triggers/Pricetrigger"
import Timer from "@/nodes/triggers/Timer"
import Fyers from "@/nodes/actions/Fyers"
import Hyperliquid from "@/nodes/actions/Hyperliquid"
import Backpack from "@/nodes/actions/Backpack"

export type TriggerType = "ACTION" | "TRIGGER"
export type NodeKind = "price-trigger" | "timer" | "backpack" | "lighter" | "hyperliquid"
type NodeMetadata = any

const nodeTypes = {
  "price-trigger": Pricetrigger,
  "timer": Timer,
  "Fyers": Fyers,
  "hyperliquid": Hyperliquid,
  'backpack': Backpack
};

interface Nodetype {
  type: NodeKind;
  data: {
    kind: TriggerType;
    metadata: NodeMetadata;
  };
  id: string;
  position: { x: number; y: number };
  NodeID:string
}

interface Edge {
  id: string;
  source: string;
  target: string;
}

interface WorkflowResponse {
  workflow: {
    nodes?: Nodetype[];
    edges?: Edge[];
  };
}

export default function WorkflowDetailPage() {
  const { workflowId } = useParams<{ workflowId: string }>()
  const navigate = useNavigate()

  const [nodes, setNodes] = useState<Nodetype[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!workflowId) return

    const fetchWorkflow = async () => {
      setLoading(true)
      setError(null)
      try {
        const body = await http.get<WorkflowResponse>(
          `/workflow/${workflowId}`,
          { auth: true },
        )
        console.log(body.workflow)
        setNodes(body.workflow.nodes ?? [])
        setEdges(body.workflow.edges ?? [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflow()
  }, [workflowId])
  console.log(nodes,edges)
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex items-center justify-between px-4 py-3 border-b bg-card">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Workflow canvas
          </h1>
          <p className="text-xs text-muted-foreground">
            ID: <span className="font-mono">{workflowId}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            size="sm"
            onClick={() =>
              navigate(`/workflows/${workflowId}/executions`)
            }
          >
            View executions
          </Button>
        </div>
      </header>

      {loading && (
        <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
          Loading workflow...
        </div>
      )}

      {error && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-destructive">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/workflows")}
          >
            Back to workflows
          </Button>
        </div>
      )}

      {!loading && !error && (
        <div className="w-[95vw] h-[70vh] m-4 border-2 border-gray-300 rounded-xl flex justify-center items-center">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
          />
        </div>
      )}
    </div>
  )
}


