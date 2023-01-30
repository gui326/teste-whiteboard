import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Primeira pergunta" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Segunda pergunta" } },
  {
    id: "3",
    position: { x: 100, y: 150 },
    data: { label: "Terceira pergunta" },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2", label: "teste" }];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
      >
        <Controls />

        <Background />
      </ReactFlow>

      <button
        onClick={() => testeAddNode()}
        style={{ position: "fixed", bottom: "16px", right: "16px" }}
      >
        Adicionar novo Node
      </button>
    </div>
  );
}
