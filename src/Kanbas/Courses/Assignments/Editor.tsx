import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
    const { courseId, aid } = useParams();
    const [assignmentName, setAssignmentName] = useState('A1 - ENV + HTML');
    const [description, setDescription] = useState(`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`);
    const [points, setPoints] = useState(100);
    const [assignmentGroup, setAssignmentGroup] = useState('ASSIGNMENTS');
    const [gradeDisplay, setGradeDisplay] = useState('Percentage');
    const [submissionType, setSubmissionType] = useState('Online');
    // const [onlineOptions, setOnlineOptions] = useState({
    //     textEntry: false,
    //     websiteUrl: false,
    //     mediaRecordings: false,
    //     studentAnnotation: false,
    //     fileUploads: false
    // });
    const [assignTo, setAssignTo] = useState('Everyone');
    const [dueDate, setDueDate] = useState('2024-05-13');
    const [availableFrom, setAvailableFrom] = useState('2024-05-06');
    const [availableUntil, setAvailableUntil] = useState('2024-05-20');

    // const handleOnlineOptionChange = (option) => {
    //     setOnlineOptions({
    //       ...onlineOptions,
    //       [option]: !onlineOptions[option]
    //     });
    //   };
    

    return (
      <div id="wd-assignments-editor">
        {/* <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value={`Assignment ${aid}`} /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /> */}
        <table>
        {/* <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr> */}
        {/* Complete on your own */}
        <h2>Assignment Name</h2>
      <input
        type="text"
        id="wd-name"
        value={assignmentName}
        onChange={(e) => setAssignmentName(e.target.value)}
      />
      <br /><br />
      <textarea
        id="wd-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        cols={50}
      />
      <br /><br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                type="number"
                id="wd-points"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select
                id="wd-assignment-group"
                value={assignmentGroup}
                onChange={(e) => setAssignmentGroup(e.target.value)}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grade-display">Display Grade as</label>
            </td>
            <td>
              <select
                id="wd-grade-display"
                value={gradeDisplay}
                onChange={(e) => setGradeDisplay(e.target.value)}
              >
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select
                id="wd-submission-type"
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="None">None</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      {submissionType === 'Online' && (
        <div>
          <h4>Online Entry Options</h4>
          <label>
            <input
              type="checkbox"
            //   checked={onlineOptions.textEntry}
            //   onChange={() => handleOnlineOptionChange('textEntry')}
            />
            Text Entry
          </label>
          <br />
          <label>
            <input
              type="checkbox"
            //   checked={onlineOptions.websiteUrl}
            //   onChange={() => handleOnlineOptionChange('websiteUrl')}
            />
            Website URL
          </label>
          <br />
          <label>
            <input
              type="checkbox"
            //   checked={onlineOptions.mediaRecordings}
            //   onChange={() => handleOnlineOptionChange('mediaRecordings')}
            />
            Media Recordings
          </label>
          <br />
          <label>
            <input
              type="checkbox"
            //   checked={onlineOptions.studentAnnotation}
            //   onChange={() => handleOnlineOptionChange('studentAnnotation')}
            />
            Student Annotation
          </label>
          <br />
          <label>
            <input
              type="checkbox"
            //   checked={onlineOptions.fileUploads}
            //   onChange={() => handleOnlineOptionChange('fileUploads')}
            />
            File Uploads
          </label>
        </div>
      )}
      <br /><br />
      <label htmlFor="wd-assign-to">Assign to</label>
      <input
        type="text"
        id="wd-assign-to"
        value={assignTo}
        onChange={(e) => setAssignTo(e.target.value)}
      />
      <br /><br />
      <label htmlFor="wd-due-date">Due</label>
      <input
        type="date"
        id="wd-due-date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br /><br />
      <label htmlFor="wd-available-from">Available from</label>
      <input
        type="date"
        id="wd-available-from"
        value={availableFrom}
        onChange={(e) => setAvailableFrom(e.target.value)}
      />
      <br /><br />
      <label htmlFor="wd-available-until">Until</label>
      <input
        type="date"
        id="wd-available-until"
        value={availableUntil}
        onChange={(e) => setAvailableUntil(e.target.value)}
      />
      <br /><br />
      <button>Cancel</button>
      <button>Save</button>
      </table>
    </div>
);}
