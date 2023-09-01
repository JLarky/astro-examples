import { useState, useEffect } from "react";

export default function Test() {
  const [state, setState] = useState("server");
  useEffect(() => {
    setTimeout(() => {
      setState("browser");
    }, 1000);
  }, []);

  console.log("Hello", state);
  return <div>Hello from {state}</div>;
}
