import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  Home,
  Contact,
  Hospitals,
  Reviews,
  Admin,
  HospitalDetails,
  HospitalForm,
  CreateAddress,
} from "./pages";
import { Layout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hospitals" element={<Hospitals />}>
          <Route path=":id" element={<HospitalDetails />} />
          <Route path=":id/edit" element={<HospitalForm isEditMode />} />
          <Route path="create" element={<HospitalForm />} />
          <Route path=":id/addresses/create" element={<CreateAddress />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Route>
  )
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
