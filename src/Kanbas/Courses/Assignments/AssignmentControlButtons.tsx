import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentActions() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const isUserFaculty = currentUser?.role === 'FACULTY';

    return (
        <div className="d-flex justify-content-end align-items-center">
            <span className="badge bg-light text-dark px-3 py-1 me-2">
                40% of Total
            </span>
            {isUserFaculty && (
                <a href={`#/Kanbas/Courses/${cid}/Assignments/AddAssignment`}>
                    <BsPlus className="icon-size-lg" style={{ color: 'black' }} />
                </a>
            )}
            <IoEllipsisVertical className="icon-size-md" />
        </div>
    );
}
