import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 pb-3 mt-5">
            <div className="container">

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <h5>Quick Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-white-50 text-decoration-none">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/students" className="text-white-50 text-decoration-none">
                                    Students
                                </Link>
                            </li>

                            <li>
                                <Link to="/courses" className="text-white-50 text-decoration-none">
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link to="/reports" className="text-white-50 text-decoration-none">
                                    Reports
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="col-md-6 mb-3">
                        <h5>Contact Information</h5>
                        <p className="text-white-50 mb-1">
                            Email: support@studentportal.edu
                        </p>
                        <p className="text-white-50">
                            Location: Karachi, Pakistan
                        </p>
                    </div>

                </div>

                <hr />

                <p className="text-center text-white-50 mb-0">
                    © 2026 StudentPortal. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
