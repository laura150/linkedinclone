import Header from "./components/Header/Header";
import styles from '../src/App.css'
import Sidebar from "./components/SideBar/Sidebar";
import Login from "./components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from 'aos'
import {useEffect} from 'react'
import Home from "./components/Home/Home";
import Network from "./components/Network/Network";
import Register from "./components/Register/Register";
import LandingPage from "./components/LandingPage/LandingPage";
import Signin from "./components/Signin/Signin";
import ProtectedRoutes from './ProtectedRoutes'
import {useSelector} from 'react-redux'


function App() {
  const {currentUser} = useSelector((state)=> state.user)
  useEffect(() => {
  
    Aos.init({duration:1500})
  }, [])
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path ='/'>
          <LandingPage/>
          </Route>

          <Route exact path ='/register'>
          <Register/>
          </Route>

          <Route exact path ='/signin'>
         <Signin/>
          </Route>

          <Route exact path ='/network'>
         <Network/>
          </Route>

          <ProtectedRoutes exact path ='/home' firstcomponent={Header} component={Home}  isAuth={currentUser}></ProtectedRoutes>

        </Switch>
      </Router>
      





        {/* <Header/>
        <div className={styles.app}>
              <Sidebar/>
        </div> */}

    </div>
   
  )
}

export default App;
