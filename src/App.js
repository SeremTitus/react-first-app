import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import HomePage from './pages/HomePage';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/*' element={<HomePage />}/>
                <Route path='/all-meetups' element={<AllMeetupsPage />}/>
                <Route path='/new-meetup' element={<NewMeetupPage />}/>
                <Route path='/favorites' element = { <FavoritesPage />}/>
            </Routes>             
        </Layout>   
    );
}

export default App;
