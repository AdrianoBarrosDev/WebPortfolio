import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailsPage } from "../pages/ProjectDetailsPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/healthyClinics' element={<DetailsPage nameProject="healthyClinics" />}/>
            <Route path='/brainTumorSystem' element={<DetailsPage nameProject="brainTumorSystem" />}/>
            <Route path='/webPortfolio' element={<DetailsPage nameProject="webPortfolio" />}/>
        </Routes>
    );
}