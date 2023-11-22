import './App.css';
import UserList from './Component/UserList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<UserList/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
