import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import LanguagesPage from '../LanguagesPage/LanguagesPage'
import SoftSkillsPage from '../SoftSkillsPage/SoftSkillsPage'
import CompanysPage from '../CompanysPage/CompanysPage'
import CreatePage from '../CreatePage/CreatePage'
import QuestionDetail from '../../components/QuestionDetail/QuestionDetail'
import * as questionsAPI from '../../utilities/questions-api'



export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions]= useState([]);

  useEffect(function() {
    async function getQuestions() {
      const quests = await questionsAPI.getAll();
      setQuestions(quests)
    }
      getQuestions()
  }, []);


  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      { user ?
        <>
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage user={user} setUser={setUser} />
            </Route>

            <Route path="/orders">
              <OrderHistoryPage />
            </Route>

            <Route path="/home">
              <HomePage questions={questions}/>
            </Route> 
            
            <Route path="/languages">
              <LanguagesPage />
            </Route> 
            
            <Route path="/soft-skills">
              <SoftSkillsPage />
            </Route> 
            
            <Route path="/companys">
              <CompanysPage />
            </Route> 

            <Route path="/create">
              <CreatePage user={user}/>
            </Route> 

            <Route path="/question/:id">
              <QuestionDetail questions={questions}/>
            </Route> 
            
            <Redirect to="/home" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}