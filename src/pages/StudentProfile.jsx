
import { useParams, Link } from 'react-router-dom';

function StudentProfile() {

    const { id } = useParams();

    return (
        <div className="container mt-5">

            <div className="card shadow-sm">

                <div className="card-body">

                    <h1>Student Profile</h1>

                    <hr />

                    <p>
                        <strong>Student ID:</strong> {id}
                    </p>

                    <p>
                        <strong>Name:</strong> Spongebob
                    </p>

                    <p>
                        <strong>Program:</strong> Culinary Arts
                    </p>

                    <p>
                        <strong>Year:</strong> 2
                    </p>

                    <p>
                        <strong>Email:</strong> spongebob@studentportal.edu
                    </p>

                    <Link
                        to="/students"
                        className="btn btn-secondary"
                    >
                        Back to Students
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default StudentProfile;
