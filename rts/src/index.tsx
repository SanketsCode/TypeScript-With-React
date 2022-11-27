import ReactDOM from "react-dom/client";
import EventComponent from "./events/EventComponent";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import * as React from 'react';
import UserSearch from "./refs/UserSearch";


const App = () => {
    return (
        <div>
            {/* <GuestList /> */}
            {/* <UserSearch /> */}
            {/* <EventComponent /> */}
            <UserSearch />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);