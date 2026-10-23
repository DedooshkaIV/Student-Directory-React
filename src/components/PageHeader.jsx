import { Link } from 'react-router-dom';

function PageHeader() {

    return (
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3 border-bottom pb-2">
                <h2>Student Directory</h2>

                <Link
                    to="/students/register"
                    className="btn btn-primary"
                >
                    Add New Student
                </Link>
                
            </div>
    );
}

export default PageHeader;
