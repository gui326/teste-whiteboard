import { useCallback, useMemo } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import "./style.css";
import TextUpdaterNode from "../../components/TextUpdaterNode";

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 15, y: 0 },
    data: { label: "1. Pergunta" },
  },
  { id: "2", position: { x: 15, y: 150 }, data: { label: "2. Pergunta" } },
  {
    id: "3",
    position: { x: 150, y: 250 },
    data: { label: "3. Pergunta" },
  },
  {
    id: "4",
    position: { x: 350, y: 550 },
    data: { label: "Final" },
  },
];

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "blue",
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const testeAddNode = () => {
    setNodes([
      ...nodes,
      {
        id: String(Math.random() + 100),
        position: { x: 200, y: 200 },
        data: { label: "Quarta pergunta" },
        type: "input",
      },
    ]);
  };

  const flowStyle = { width: "100%", height: 600 };

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={connectionLineStyle}
        nodeTypes={nodeTypes}
      />

      <button
        onClick={() => testeAddNode()}
        style={{ position: "fixed", bottom: "16px", right: "16px" }}
      >
        Adicionar novo Node
      </button>
    </div>
  );
}
