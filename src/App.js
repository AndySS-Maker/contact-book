import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import SignUp from "./components/signUp";
import AllContacts from "./components/allContacts";
import NewContact from "./components/newContact";
import ContacDetails from "./components/contactDetails";
import SignIn from "./components/signIn";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/allContacts" element={<AllContacts />} />
        <Route path="/newContact" element={<NewContact />} />
        <Route path="contactBook/:id" element={<ContacDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
