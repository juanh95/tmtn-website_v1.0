import React from "react";

import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <main className="font-nunito max-w-6xl mx-auto">
      <Header />
      <ProjectList />
      <footer className="text-lg text-center p-4">
        <p>
          check out my{" "}
          <a
            href="https://github.com/Hectormalvarez"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            github
          </a>
        </p>
        <p>copyright 2022</p>
      </footer>
    </main>
  );
}

export default App;
