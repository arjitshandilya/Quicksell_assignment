import React, { createContext, useContext, useState } from "react";




// const statusOptions = ['Todo', 'In Progress', 'Done', 'Cancelled', 'Backlog'];

// const priorityLevels = {
//   4: 'Urgent',
//   3: 'High',
//   2: 'Medium',  
//   1: 'Low',
//   0: 'No Priority'
// };

// function App() {

//   const [tickets, setTickets] = useState([]);
//   const [groupBy, setGroupBy] = useState('status'); 
//   const [sortBy, setSortBy] = useState('priority');

  



const AppStateContext = createContext();
export const AppStateProvider = ({ children }) => { 
  const initialState = {
    grouping: "status",
    ordering: "priority",
  };  
  const savedState = JSON.parse(localStorage.getItem("appState"));
  const [selectedOptions, setSelectedOptions] = useState(
    savedState || initialState
  );
 
  const updateSelectedOptions = (grouping, ordering) => {
    const newSelectedOptions = { grouping, ordering };
    setSelectedOptions(newSelectedOptions);
    localStorage.setItem("appState", JSON.stringify(newSelectedOptions));  };

  return (
    <AppStateContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
