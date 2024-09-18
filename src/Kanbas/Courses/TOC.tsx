import React from 'react';
import { Link } from 'react-router-dom';

export default function TOC() {
  return (
    <ul>
      <li><Link to="/Kanbas/Courses/Home">Home</Link></li>
      <li><Link to="/Kanbas/Courses/Modules">Modules</Link></li>
      <li><Link to="/Kanbas/Courses/Assignments">Assignments</Link></li>
      {/* Add other sections like Quizzes, Exams, etc. */}
    </ul>
    
  );
};
