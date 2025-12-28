import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TriggerSheet } from './TriggerSheet';
import Pricetrigger from '@/nodes/triggers/Pricetrigger';
import Timer from '@/nodes/triggers/Timer';
import { ActionSheet } from './ActionSheet';
import Fyers from '@/nodes/actions/Fyers';
import Hyperliquid from '@/nodes/actions/Hyperliquid';
import Backpack from '@/nodes/actions/Backpack';
import { v4 as uuidv4 } from 'uuid';
import { http } from '@/lib/http';

export type TriggerType = "ACTION" | "TRIGGER"
export type NodeKind = "price-trigger" | "timer" | "backpack" | "Fyers" | "hyperliquid"
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

export default function Workflow() {
  const [nodes, setNodes] = useState<Nodetype[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [workflowID, setworkflowID] = useState<string|null>()
  const [triggered, settriggered] = useState<{
    position:{
      x:number,
      y:number
    },
    startingNodeId:string
  }|null>()
 
  const onNodesChange = useCallback(
    (changes:any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes:any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params:any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const onConnectEnd = useCallback(
    //@ts-ignore
    (event:any, connectionState:any) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // const { clientX, clientY } =
        //   'changedTouches' in event ? event.changedTouches[0] : event;
        settriggered({
          startingNodeId: connectionState.fromNode.id,
          position: connectionState.from
        })
      }
    },
    [],
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {!nodes.length && (
        <TriggerSheet
          onSelect={async(type: NodeKind, metadata: NodeMetadata) => {
            const node: Nodetype[] = [{
              id: uuidv4(),
              data: { kind: "TRIGGER", metadata },
              position: { x: 0, y: 0 },
              type,
              NodeID: metadata.NodeID
            }];
            setNodes([
              ...nodes,
              node[0]
            ]);
            const res=await http.post<Nodetype>(
              '/workflow',
              { nodes:node, edges },
              { auth: true }
            );
            setworkflowID(res.id)
          }}
        />
      )}
      {triggered && (
        <ActionSheet
          onSelect={async(type: NodeKind, metadata: NodeMetadata) => {
            const id=uuidv4()
            const node: Nodetype = {
              id: id,
              data: { kind: "ACTION", metadata },
              position: triggered.position,
              type,
              NodeID: metadata.NodeID
            };
            const edge: Edge={
              id:`${triggered.startingNodeId}-${id}`,
              source: triggered.startingNodeId,
              target: id
            }
            setNodes([
              ...nodes,
              node
            ]);
            setEdges([...edges, edge])
            settriggered(null);
            await http.put<Nodetype>(
              `/workflow/${workflowID}`,
              { nodes:node, edges:edge},
              { auth: true }
            );
          }}
        />
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        fitView
      />
    </div>
  );
}