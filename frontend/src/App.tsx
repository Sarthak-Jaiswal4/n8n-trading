import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Workflow from './components/Workflow';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import WorkflowsPage from './pages/WorkflowsPage';
import ExecutionLogsPage from './pages/ExecutionLogsPage';
import WorkflowDetailPage from './pages/WorkflowDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Workflow />} />
        <Route path='/workflows' element={<WorkflowsPage />} />
        <Route path='/workflows/:workflowId' element={<WorkflowDetailPage />} />
        <Route
          path='/workflows/:workflowId/executions'
          element={<ExecutionLogsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}