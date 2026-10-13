function Breadcrumb() {
    return (

        <nav aria-label="breadcrumb" className="bg-dark rounded p-3">

            <ol className="breadcrumb mb-0">

                <li className="breadcrumb-item">
                    <a href="#" className="text-white-50 text-decoration-none">
                        Home
                    </a>
                </li>

                <li className="breadcrumb-item">
                    <a href="#" className="text-white-50 text-decoration-none">
                        Students
                    </a>
                </li>

                <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                >
                    Directory
                </li>
            </ol>

        </nav>
    );
}

export default Breadcrumb;
