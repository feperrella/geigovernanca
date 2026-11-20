import Home from "@/pages/Home";
import GEIForDecisionMakers from "@/pages/GEIForDecisionMakers";

export default function App() {
  return window.location.pathname === "/para-quem-decide" ? <GEIForDecisionMakers /> : <Home />;
}
