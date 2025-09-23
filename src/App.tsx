import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
// import Home from "./pages/Home";
import Register from "./pages/Register";
import DashboardLayout from "./pages/DashboardLayout";
import TutorHome from "./pages/tutor/Home";
import TutorMyClasses from "./pages/tutor/MyClasses";
import TutorAssessments from "./pages/tutor/Assessments";
import StudentHome from "./pages/student/Home";
import ForgotPassword from "./components/register/ForgotPassword";
import MyClasses from "./components/Dashboard/student/MyClasses";
import GradeAssessments from "./pages/tutor/GradeAssessments";
import TutorLeaderboard from "./pages/tutor/Leaderboard";

function AppContent() {

    // GradeAssessments
    return (
        <div className="w-full">
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Tutor Dashboard Routes */}
                <Route path="/dashboard/t" element={<DashboardLayout />}>
                    {/* <Route index element={<TutorHome />} /> */}
                    <Route path="home" element={<TutorHome />} />TutorAssessments
                    <Route path="my-classes" element={<TutorMyClasses />} />
                    <Route
                        path="assessments"
                        element={
                            <TutorAssessments
                                assessments={[]}
                            />
                        }
                    />
                </Route>
                
                <Route path="/dashboard/t/grade-assessments" element={<GradeAssessments />} />

                
                <Route path="/dashboard/t/leaderboard" element={<TutorLeaderboard />} />

            
                <Route path="/dashboard/s" element={<DashboardLayout />}>
                    <Route index element={<StudentHome />} />
                    <Route path="home" element={<StudentHome />} />
                    <Route path="my-classes" element={<MyClasses />} />
                    {/* <Route
                        path="assessments"
                        element={<StudentAssessments />}
                    /> */}
                </Route>

                {/* Catch all route - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
