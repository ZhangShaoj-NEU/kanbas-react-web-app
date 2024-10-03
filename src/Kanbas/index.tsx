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
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation/>
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
