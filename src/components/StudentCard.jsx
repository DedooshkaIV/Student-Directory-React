import { useState } from "react";

function StudentCard({ name, id, major, year, gpa, image }) {

    const [views, setViews] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    function handleViews() {
        setViews(views + 1)
    }

    function handleDelete() {
        setShowDelete(true);
    }

    return (
        <div className="card shadow-sm h-100">

            <img
                src={image}
                className="card-img-top"
                alt={`${name}'s profile`}
                style={{ height: "230px", objectFit: "cover",  objectPosition: "center" }}
            />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="card-text">
                    ID: {id} <br />
                    Major: {major} <br />
                    Year: {year} <br />
                    GPA: {gpa}
                </p>

                <p className="text-muted">
                    Profile Views: {views}
                </p>

                <div className="d-flex flex-wrap gap-2">

                    <button className="btn btn-outline-primary btn-sm"
                        onClick={handleViews}>

                        View Profile
                    </button>

                    <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setShowDetails(!showDetails)}
                    >

                        {showDetails ? "Hide Details" : "Show Details"}
                    </button>

                    <button className="btn btn-outline-danger btn-sm"
                            onClick={handleDelete}>
                        Delete
                    </button>

                </div>

                

                {showDetails && (
                    <div className="alert alert-light border mt-3">
                        <p className="mb-1 text-break">Email: {name.split(" ")[0].toLowerCase()}@studentportal.edu</p>
                        <p className="mb-0">Status: Active</p>
                    </div>
                )}

                {showDelete && (
                    <div className="alert alert-warning alert-dismissible mt-3" role="alert">
                        Are you sure you want to delete this profile?

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowDelete(false)}
                                    aria-label="Close"
                                ></button>
                    </div>
                )}

            </div>

        </div>
    );
}

export default StudentCard;
