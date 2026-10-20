function Courses() {
    return (
        <div className="container mt-5">
            <h1>Courses</h1>
            
            <p className="mb-4">
                Explore the courses available on StudentPortal.
            </p>

            <div className="row g-3">

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h5 className="card-title">
                                Software Construction and Development
                            </h5>

                            <p className="text-muted mb-2">
                                Code: SE301
                            </p>

                            <p className="card-text">
                                <strong>Prerequisite:</strong> Object-Oriented Programming
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h5 className="card-title">
                                Database Systems
                            </h5>

                            <p className="text-muted mb-2">
                                Code: CS302
                            </p>

                            <p className="card-text">
                                <strong>Prerequisite:</strong> Introduction to Computing
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h5 className="card-title">
                                Operating Systems
                            </h5>

                            <p className="text-muted mb-2">
                                Code: CS303
                            </p>

                            <p className="card-text">
                                <strong>Prerequisite:</strong> Computer Organization and Assembly Language
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">

                            <h5 className="card-title">
                                Software Design and Architecture
                            </h5>

                            <p className="text-muted mb-2">
                                Code: SE304
                            </p>

                            <p className="card-text">
                                <strong>Prerequisite:</strong> None
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Courses;