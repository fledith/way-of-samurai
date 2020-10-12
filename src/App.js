import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializedApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PrePreloader} from './components/common/Preloader/Preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render()  {
        if(!this.props.initialized) {
            return <PrePreloader />
        } else {
        return ( 
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
                <Footer />
            </div> 
    )}}
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);