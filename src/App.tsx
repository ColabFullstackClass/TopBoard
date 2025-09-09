import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TutorHome from "./pages/tutor/Home";
import TutorMyClasses from "./pages/tutor/MyClasses";
import TutorAssessments from "./pages/tutor/Assessments";
import StudentHome from "./pages/student/Home";
import StudentMyClasses from "./pages/student/MyClasses";
import StudentAssessments from "./pages/student/Assessments";
import Sidebar from "./components/Dashboard/Sidebar";

function App() {
    return (
      <>
        <Router>
          <div className="w-full">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />

              {/* Tutor Dashboard Routes */}
              <Route path="/dashboard/t" element={<Dashboard />}>
                <Route index element={<TutorHome />} />
                <Route path="home" element={<TutorHome />} />
                <Route path="my-classes" element={<TutorMyClasses />} />
                <Route path="assessments" element={<TutorAssessments />} />
              </Route>

              {/* Student Dashboard Routes */}
              <Route path="/dashboard/s" element={<Dashboard />}>
                <Route index element={<StudentHome />} />
                <Route path="home" element={<StudentHome />} />
                <Route path="my-classes" element={<StudentMyClasses />} />
                <Route path="assessments" element={<StudentAssessments />} />
              </Route>

              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
        <Sidebar />
      </>
    );
}

export default App;
