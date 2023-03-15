import AppInfo from "../app-info/app-info";
import Search from "../search/search";

import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search">
        <Search />
      </div>
    </div>
  )
}

export default App;