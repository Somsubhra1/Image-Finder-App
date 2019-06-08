import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { MuiThemeProvider } from "material-ui/styles";
import Search from "./components/search/Search";

function App() {
    return (
        <div className="App">
            <MuiThemeProvider>
                <React.Fragment>
                    <NavBar />
                    <Search />
                </React.Fragment>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
