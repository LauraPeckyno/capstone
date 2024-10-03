import Groceries from "./Groceries";
import Healthcare from "./Healthcare";
import Index from "./Index";
import Misc from "./Misc";
import Restaurants from "./Restaurants";
import Shopping from "./Shopping";
import Telecommunications from "./Telecommunications";
import Transportation from "./Transportation";
import Travel from "./Travel";
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/index" element={<Index />} />
        <Route path="/misc" element={<Misc />} />
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