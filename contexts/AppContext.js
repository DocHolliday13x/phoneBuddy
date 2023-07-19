import React, { createContext, useState } from 'react';


const AppContext = createContext();


const AppProvider = ({ children }) => {

  const [journalEntries, setJournalEntries] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Add darkMode state

  return (
    <AppContext.Provider value={{ journalEntries, setJournalEntries, darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider };









