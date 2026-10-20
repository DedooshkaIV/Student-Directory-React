import { Link } from 'react-router-dom';
import logo from "../assets/logo(1).png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">

                <Link className="navbar-brand" to="/students">
                    <img
                        src={logo}
                        alt="StudentPortal Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-center me-2"
                    />
                    StudentPortal
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/students">
                                Students
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">
                                Courses
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/reports">
                                Reports
                            </Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ms-auto me-lg-3 mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Settings
                            </button>

                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li>
                                    <button className="dropdown-item" type="button">
                                        Profile
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                        />

                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </form>

                </div>

            </div>
        </nav>
    );

}

export default Navbar;