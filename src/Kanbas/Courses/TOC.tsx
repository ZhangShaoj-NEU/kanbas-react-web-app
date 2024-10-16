import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0" style={{ width: '110px', marginRight: '20px'}}>
      {
        links.map((link) => (
          <Link 
            key={link} 
            to={link} 
            className="list-group-item" 
            style={{
              backgroundColor: 'white',
              color: pathname.includes(link) ? 'black' : 'red',
              textAlign: 'center',
              border: 'none',
              padding: '10px 0',
              display: 'block', 
            }}>
            {link}
          </Link>
        ))
      }
    </div>
  );
}
