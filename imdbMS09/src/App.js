import './App.css';
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Container } from '@material-ui/core';
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movies";
import Footer from "./footer";


function App() {
  return (
    <>
      <BrowserRouter>      {/* for wrapping the components to get render */}
        <Header />
        <div className="app">
          <Container>
            <Switch>      {/* switching from one component to other  */}
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} exact />
              <Route path="/series" component={Series} exact />
              <Route path="/search" component={Search} exact />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
