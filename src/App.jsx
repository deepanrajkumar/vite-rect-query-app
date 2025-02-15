import QueryClientContext from "./context/QueryClientContext";
import SpaceCrafts from "./pages/SpaceCrafts";

function App() {
  return (
    <QueryClientContext>
      <SpaceCrafts />
    </QueryClientContext>
  );
}

export default App;
