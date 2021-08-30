import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage/MainPage";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import {Provider as StoreProvider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducers from './redux/reducers'


function App() {

  const store = createStore(reducers,{},applyMiddleware(ReduxThunk))

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
      <div className="App">
        {/* <LandingPage/> */}
        {/* <MainPage/> */}
        <Switch>
          <Route path="/login" component={LandingPage} />
          <Route path="/">
            <div class="h-screen w-screen grid grid-cols-12 gap-4 grid-rows-6">
              <div class="h-screen col-span-2 row-span-6">
                <Route path="*" component={() => <SideBar />} />
              </div>

              <div class="h-screen col-start-3 col-span-10 row-span-6">
                <MainPage />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
