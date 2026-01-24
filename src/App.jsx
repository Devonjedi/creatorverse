import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';

const App = () => {
  // This hook handles the logic of which page to show based on the URL
  let element = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/add", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> }, // The :id is a variable for Supabase IDs
    { path: "/view/:id", element: <ViewCreator /> }
  ]);

  return (
    <div className="App">
      {/* Navigation Bar using PicoCSS classes */}
      <nav className="container">
        <ul>
          <li><strong>💫 CREATORVERSE</strong></li>
        </ul>
        <ul>
          <li><Link role="button" to="/">View All</Link></li>
          <li><Link role="button" to="/add" className="secondary">Add a Creator</Link></li>
        </ul>
      </nav>

      <main className="container">
        {element}
      </main>
    </div>
  );
}

export default App;
