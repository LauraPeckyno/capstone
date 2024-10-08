import Groceries from "./Groceries";
import Healthcare from "./Healthcare";
import Index from "./Index";
import Restaurants from "./Restaurants";
import Shopping from "./Shopping";
import Telecommunications from "./Telecommunications";
import Transportation from "./Transportation";
import Travel from "./Travel";
import SocialServices from "./SocialServices";
import { Routes, Route } from "react-router-dom";
import Entertainment from "./Entertainment";
// import { Link } from "react-router-dom";  not needed here

function AppRoutes() {
  return (
    <> 
    {/* routes for all of the category pages and the homepage */}
      <Routes>
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/index" element={<Index />} />
        <Route path="/socialservices" element={<SocialServices />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/telecommunications" element={<Telecommunications />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/*" element={<Index />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
