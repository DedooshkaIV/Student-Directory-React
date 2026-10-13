import { useState } from "react";

function PageHeader() {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3 border-bottom pb-2">
                <h2>Student Directory</h2>

                <button
                    className="btn btn-primary"
                    onClick={() => setShowMessage(true)}
                >
                    Add New Student
                </button>
            </div>

            {showMessage && (
                <div className="alert alert-info alert-dismissible" role="alert">
                    Student registration is currently unavailable.

                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setShowMessage(false)}
                    ></button>
                </div>
            )}
        </>
    );
}

export default PageHeader;
