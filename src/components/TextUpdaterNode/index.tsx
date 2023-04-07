import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data }: any) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div
        style={{
          width: "300px",
          backgroundColor: "white",
          minHeight: "150px",
          height: "calc(100% + 100px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          border: "1px solid #ff373742",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #ff373742",
            height: "60px",
            padding: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h6 style={{ fontSize: "14px", margin: 0 }}>{data.label}</h6>
        </div>
        <div style={{ padding: "12px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: "140%",
              color: "#433f3f",
            }}
          >
            Olá, gostaria de responder algumas perguntas sobre o imovel 1?
          </p>
        </div>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
