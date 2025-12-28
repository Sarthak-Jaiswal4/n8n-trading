import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-background to-muted px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Automate your workflows with <span className="text-primary">n8n</span>
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Create, manage, and monitor workflows visually. Connect triggers and actions,
          then inspect executions in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <Button size="lg" onClick={() => navigate("/dashboard")}>
            Create workflow
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/workflows")}
          >
            See all workflows
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}


