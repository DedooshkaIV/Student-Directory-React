function Pagination() {
    return (
        <nav aria-label="Student directory pages">
            <ul className="pagination justify-content-center mt-4">

                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>

                <li className="page-item active">
                    <span className="page-link">1</span>
                </li>

                <li className="page-item">
                    <span className="page-link">2</span>
                </li>

                <li className="page-item">
                    <span className="page-link">3</span>
                </li>

                <li className="page-item">
                    <span className="page-link">Next</span>
                </li>

            </ul>
        </nav>
    );
}

export default Pagination;
