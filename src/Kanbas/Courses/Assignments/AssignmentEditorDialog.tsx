export default function AssignmentDeletionDialog({ onConfirm, onCancel } : { onConfirm: (assignmentId: any) => void, onCancel: () => void }) {
    return (
        <div
            className="modal fade"
            id="assignment-deletion-modal"
            aria-labelledby="assignmentDeletionLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="assignmentDeletionLabel">
                            Confirm Deletion
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you certain you want to delete this assignment?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => onConfirm(null)}
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
