// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// import Courses from "./Courses";
// import Account from "./Account";
// import TOC from "./TOC";

// export default function Kanbas() {
//     return (
//       <div id="wd-account-screen">
//         <table>
//           <tr>
//             <td valign="top">
//               <h1>Kanbas</h1>
//               <TOC />
//               </td>
//               <td valign="top">
//               <Routes>
//                 <Route path="/" element={<Navigate to="Account" />} />
//                 <Route path="/Account/*" element={<Account />} />
//                 <Route path="/Courses/*" element={<Courses />} />
//               </Routes>
//             </td>
//           </tr>
          
//         </table>
//       </div>
//   );}
  
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./TOC";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
export default function Kanbas() {
  return (
    <Provider store={store}>

      <div id="wd-kanbas">
        <div>
          <KanbasNavigation/>
          <div className="wd-main-content-offset p-3">

            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route 
      path="/Dashboard" 
      element={
          <Dashboard 
              courses={[]} 
              course={{}} 
              setCourse={() => {}} 
              addNewCourse={() => {}} 
              deleteCourse={() => {}} 
              updateCourse={() => {}} 
          />
      } 
  />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
          
            
      </div>
    </Provider>
    
);}
