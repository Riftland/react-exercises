import data from "./contacts.json";
import "./App.css";
import { useState } from "react";
import Contact from "./Components/Contact";
import Filters from "./Components/Filters";

function App() {
  const [contacts] = useState(data.contacts);
  const [nameFilter, setNameFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState(0);
  const [genderFilter, setGenderFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  return (
    <div className="App">
      <Filters
        setFilter={setAgeFilter}
        setNameFilter={setNameFilter}
        setCompanyFilter={setCompanyFilter}
        setGenderFilter={setGenderFilter}
      />

      {contacts.map((contact) => {
        if (
          contact.name.includes(nameFilter) &&
          (ageFilter == 0 || contact.age == ageFilter) &&
          (genderFilter === "" || contact.gender === genderFilter) &&
          contact.company.includes(companyFilter)
        ) {
          return <Contact key={contact.id} contact={contact} />;
        }
      })}
    </div>
  );
}

export default App;
