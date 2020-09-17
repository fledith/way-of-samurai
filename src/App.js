import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {  
    return ( 
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>      
    );
}

export default App;