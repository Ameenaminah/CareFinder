import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  Contact,
  Hospitals,
  Reviews,
  Admin,
  HospitalDetails,
} from "./pages";
import { Layout } from "./components";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hospitals" element={<Hospitals />}>
            <Route path=":id" element={<HospitalDetails />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
