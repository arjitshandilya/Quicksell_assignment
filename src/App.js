import "./App.css";
import React from "react";
import { BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { AppStateProvider } from "./AppStateContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <AppStateProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppStateProvider>
    </Router>
  );
}

export default App;


// const groupedTickets = () => {
//   if (groupBy === 'status') {
//     return tickets.reduce((grouped, ticket) => {
//       const group = grouped[ticket.status] ?? [];
//       group.push(ticket);
//       grouped[ticket.status] = group;
//       return grouped;
//     }, {});
//   } else if (groupBy === 'user') {
//     return tickets.reduce((grouped, ticket) => {
//       const group = grouped[ticket.assigned_to] ?? [];
//       group.push(ticket);  
//       grouped[ticket.assigned_to] = group;
//       return grouped;
//     }, {}); 
//   } else {
//     return tickets.reduce((grouped, ticket) => {
//       const priority = ticket.priority;
//       const group = grouped[priority] ?? [];
//       group.push(ticket);
//       grouped[priority] = group;
//       return grouped;
//     }, {});
//   }
// }
