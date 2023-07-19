import React, { createContext, useState } from 'react';


const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  return (
    <AppContext.Provider value={{ journalEntries, setJournalEntries }}>
      {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider };









