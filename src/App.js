import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Profile from "./components/profileDetails/Profile";
import PostDetails from "./components/posts/PostDetails";
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignedUp";
import CreatePost from "./components/posts/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/signup" component={SignedUp} />
          <Route path="/signin" component={SignedIn} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
