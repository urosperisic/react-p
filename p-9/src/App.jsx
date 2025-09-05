import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <>
      <header>
        <h1>re</h1>
        <h2>ac</h2>
        <p>t</p>
      </header>
      <main>
        <ProjectsSidebar />
        <NewProject />
        <NoProjectSelected />
      </main>
    </>
  );
}

export default App;
