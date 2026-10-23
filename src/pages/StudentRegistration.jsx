import { Link } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

function StudentRegistration() {
    return (
        <div className="container mt-5">

             <Link
                to="/students"
                className="btn btn-secondary mb-4"
            >
                Back to Students
            </Link>

            <StudentForm />
        </div>
    );
}

export default StudentRegistration;