import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import LanguagesPage from '../LanguagesPage/LanguagesPage'
import SoftSkillsPage from '../SoftSkillsPage/SoftSkillsPage'
import CompaniesPage from '../CompaniesPage/CompaniesPage'
import CreatePage from '../CreatePage/CreatePage'
import QuestionDetail from '../../components/QuestionDetail/QuestionDetail'
import * as questionsAPI from '../../utilities/questions-api'
import JavaScriptIndex from '../../components/LanguageIndex/JavascriptIndex'
import PythonIndex from '../../components/LanguageIndex/PythonIndex'
import MySqlIndex from '../../components/LanguageIndex/MySqlIndex'
import MongoDbIndex from '../../components/LanguageIndex/MongoDbIndex'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions]= useState([]);

  // useEffect(function() {
  //   async function getQuestions() {
  //     const quests = await questionsAPI.getAll();
  //     setQuestions(quests)
  //   }
  //     getQuestions()
  // }, []);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      { user ?
        <>
          <Switch>
            <Route path="/home">
              <HomePage questions={questions} setQuestions={setQuestions} />
            </Route> 
            
            <Route path="/languages">
              <LanguagesPage />
            </Route> 
            
            <Route path="/soft-skills">
              <SoftSkillsPage questions={questions}/>
            </Route> 
            
            <Route path="/companies">
              <CompaniesPage questions={questions}/>
            </Route> 

            <Route path="/create">
              <CreatePage user={user}/>
            </Route> 

            <Route path="/question/:id">
              <QuestionDetail/>
            </Route> 

            <Route path="/javascript">
              <JavaScriptIndex questions={questions}/>
            </Route>

            <Route path="/python">
              <PythonIndex questions={questions}/>
            </Route>

            <Route path="/mysql">
              <MySqlIndex questions={questions}/>
            </Route>

            <Route path="/mongodb">
              <MongoDbIndex questions={questions}/>
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