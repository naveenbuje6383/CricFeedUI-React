import { Navigate, Route, Routes } from "react-router-dom";
import FeedPage from "../pages/feed/FeedPage";
import ProfilePage from "../pages/profile/ProfilePage";
import TeamsPage from "../pages/teams/TeamsPage";

const AppRoutes = () =>{
return(
    <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element = {<FeedPage />}/>
        <Route path="/profile" element = {<ProfilePage />} />
        <Route path="/teams" element={<TeamsPage />} />
    </Routes>
)

}

export default AppRoutes;