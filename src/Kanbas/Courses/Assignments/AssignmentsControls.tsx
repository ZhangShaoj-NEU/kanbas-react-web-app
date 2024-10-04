import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentsControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary float-end"
          type="button" data-bs-toggle="dropdown">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>
        
      </div>
    </div>
);}
