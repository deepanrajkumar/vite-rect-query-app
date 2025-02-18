import ThemeProvider from "./context/theme/ThemeProvider";
import QueryProvider from "./context/QueryProvider";
import SpaceCrafts from "./pages/SpaceCrafts";

function App() {
  return (
    <>
      <ThemeProvider>
        <QueryProvider>
          <SpaceCrafts />
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
