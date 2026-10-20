import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import Courses from './pages/Courses';
import Reports from './pages/Reports';

import './App.css';

function App() {
    return (

        <BrowserRouter>

            <div className="d-flex flex-column min-vh-100">

                <Navbar />

                <div className="flex-grow-1">

                    <Routes>

                        <Route path="/" element={<Dashboard />} />

                        <Route path="/students" element={<Students />} />

                        <Route path="/students/:id" element={<StudentProfile />} />

                        <Route path="/courses" element={<Courses />} />

                        <Route path="/reports" element={<Reports />} />

                    </Routes>

                </div>
                
                <Footer />

            </div>

        </BrowserRouter>
    );
}

export default App;
