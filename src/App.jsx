// Components
import Header from "./components/Header";
import ListProjects from "./components/ListProjects";

// Context Provider
import { ProjectsProvider } from "./context/ProjectsProvider";

function App() {
  return (
    <ProjectsProvider>
      <Header />
      <ListProjects />
    </ProjectsProvider>
  );
}

export default App;
