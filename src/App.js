import CarsList from "./components/carsList/CarsList";
import "./App.css";
import StudentList from "./components/studentList/StudentList";

function App() {
  return (
    <div className="app-container">
      <CarsList />
      <StudentList />
    </div>
  );
}

export default App;
