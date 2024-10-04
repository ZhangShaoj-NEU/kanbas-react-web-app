import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
    const { courseId, aid } = useParams();
    const [assignmentName, setAssignmentName] = useState('A1 - ENV + HTML');
    const [description, setDescription] = useState(`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify...`);
    const [points, setPoints] = useState(100);
    const [assignmentGroup, setAssignmentGroup] = useState('ASSIGNMENTS');
    const [gradeDisplay, setGradeDisplay] = useState('Percentage');
    const [submissionType, setSubmissionType] = useState('Online');
    const [assignTo, setAssignTo] = useState('Everyone');
    const [dueDate, setDueDate] = useState('2024-05-13');
    const [availableFrom, setAvailableFrom] = useState('2024-05-06');
    const [availableUntil, setAvailableUntil] = useState('2024-05-20');

    return (
      <div className="container p-4">
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            id="wd-name"
            className="form-control"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          ></textarea>
        </div>

        {/* Points, Assignment Group, Display Grade, Submission Type */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input
              type="number"
              id="wd-points"
              className="form-control"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
            <select
              id="wd-assignment-group"
              className="form-control"
              value={assignmentGroup}
              onChange={(e) => setAssignmentGroup(e.target.value)}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="wd-grade-display" className="form-label">Display Grade as</label>
            <select
              id="wd-grade-display"
              className="form-control"
              value={gradeDisplay}
              onChange={(e) => setGradeDisplay(e.target.value)}
            >
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            <select
              id="wd-submission-type"
              className="form-control"
              value={submissionType}
              onChange={(e) => setSubmissionType(e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>

        {/* Online Entry Options */}
        {submissionType === 'Online' && (
          <div className="mb-3">
            <h5>Online Entry Options</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="text-entry" />
              <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="website-url" />
              <label className="form-check-label" htmlFor="website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="media-recordings" />
              <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="student-annotation" />
              <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="file-uploads" />
              <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
            </div>
          </div>
        )}

        {/* Assign To, Due Date, Available Dates */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            <input
              type="text"
              id="wd-assign-to"
              className="form-control"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="wd-due-date" className="form-label">Due</label>
            <input
              type="date"
              id="wd-due-date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="wd-available-from" className="form-label">Available From</label>
            <input
              type="date"
              id="wd-available-from"
              className="form-control"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
          </div>
        </div>

        {/* Cancel and Save Buttons */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    );
}
