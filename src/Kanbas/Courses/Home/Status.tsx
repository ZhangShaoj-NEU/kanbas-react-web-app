import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { LiaBullhornSolid } from "react-icons/lia";
import { FaBell } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function CourseStatus() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const isFaculty = currentUser?.role === 'FACULTY';

    return (
        <div id="wd-course-status" style={{ width: "300px" }} className="m-3">
            <h2>Course Status</h2>
            {isFaculty && <div>
                <div className="d-flex">
                    <div className="w-50 pe-1">
                        <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
                    </div>
                    <div className="w-50">
                        <button className="btn btn-lg btn-success w-100">
                            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
                    </div>
                </div>
                <br />
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                    <BiImport className="me-2 fs-5" /> Import Existing Content
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                    <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
                </button>
                <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                    <MdHome className="me-2 fs-5" /> Choose Home Page
                </button>
            </div>}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiSolidBarChartAlt2 className="me-2 fs-5" /> View Course Stream
            </button>
            {isFaculty && <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaBullhornSolid className="me-2 fs-5" /> New Announcement
            </button>}
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiSolidBarChartAlt2 className="me-2 fs-5" /> New Analytics
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaBell className="me-2 fs-5" /> View Course Notifications
            </button>
        </div>
    );
}
