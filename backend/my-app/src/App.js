import Login from "./components/Login";
import Signup from "./components/Signup";
import Info from "./components/Info";
import Welcome from "./components/Welcome";
import PrivateComponent from "./components/privateComponent";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Addbook from "./components/Addbook";
import Give from "./components/Admin/Give";
import Collect from "./components/Admin/Collect";
import Status from "./components/Admin/Studentstatus";
import Totalstatus from "./components/Admin/Totalstatus";
import Studentstatus from "./components/Admin/Studentstatus";
import Studentbookhistory from "./components/Studentbookhistory";
import UserInfo from "./components/Admin/UserInfo";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const auth = localStorage.getItem("user");
  let profile = JSON.parse(localStorage.getItem("user"));
  let authAdmin = false;
  if (auth) {
    if (profile.email === "rajangel") {
      authAdmin = true;
    }
  }

  const logout = () => {
    console.log("Loged Out");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Router>
        <nav className="nav p-2 text-light position-fixed main-heading justify-content-end">
          {authAdmin ? (
            <Link
              className="nav-link active  "
              aria-current="page"
              to="/admin"
            >
              Admin Panel
            </Link>
          ) : (
            <Link
              className="nav-link active  "
              aria-current="page"
              to="/"
            ></Link>
          )}

          {auth ? (
            <Link
              className="nav-link active  "
              aria-current="page"
              to="/home"
            >
              Home
            </Link>
          ) : (
            <Link
              className="nav-link active  "
              aria-current="page"
              to="/login"
            >
              Home
            </Link>
          )}

          <Link className="nav-link " to="/info">
            Info
          </Link>
          {auth ? (
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          ) : (
            <Link className="nav-link " to="/signup">
              Signup
            </Link>
          )}

          {auth ? (
            <Link onClick={logout} className="nav-link " to="/login">
              Logout
            </Link>
          ) : (
            <Link className="nav-link " to="/login">
              Login
            </Link>
          )}
        </nav>

        <Switch>
          <Route element={<PrivateComponent />}>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/home" element={<Welcome />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/yourhistory" element={<Studentbookhistory />} />
            <Route exact path="/history" element={<Status />} />
          </Route>

          <Route exact path="/addbooks" element={<Addbook />} />
          <Route exact path="/give" element={<Give />} />
          <Route exact path="/collect" element={<Collect />} />
          <Route exact path="/status" element={<Studentstatus />} />
          <Route exact path="/totalhistory" element={<Totalstatus />} />
          <Route exact path="/users" element={<UserInfo/>}/>
          <Route exact path="/" element={<Info />} />

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/info" element={<Info />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
