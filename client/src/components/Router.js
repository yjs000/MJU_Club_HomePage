import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import JoinPage from '../pages/JoinPage';
import MainPage from '../pages/MainPage';
import FindIdPwPage from '../pages/FindIdPwPage';
import MjuClubPage from '../pages/MjuClubPage';
import PromotionPage from '../pages/PromotionPage';
import AboutPage from '../pages/AboutPage';
import MonthlyPage from '../pages/MonthlyPage';
import Page from "../components/Page";
import JoinTermPage from "../pages/JoinTermPage"
import WelcomePage from "../pages/WelcomePage"

// Pages 로 이동
export default function Routers() {
  return(
    <Router>
      <>
        <Switch>
          {/* navbar menu route*/}
          <Route path="/mju_club" component={MjuClubPage}/>
          {/* club's pages */}  
          {/* <Route path="/mju_club/mirs" component={MjuClubPage}/> */}


          <Route path="/promotion" component={PromotionPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/monthly_keyum" component={MonthlyPage}/>

          <Route path="/login" component={LoginPage}/>
          <Route path="/join" component={JoinPage}/>
          <Route path="/join_term" component={JoinTermPage}/>
          <Route path="/welcome" component={WelcomePage}/>
          <Route path="/find_id_pw" component={FindIdPwPage}/>
          <Route path="/page" component={Page}/>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
