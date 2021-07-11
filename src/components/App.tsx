import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/base.css';
import {AppHeader} from "./main/AppHeader";
import {MultiBloom} from "./main/MultiBloom";

function App()
{
    return (
        <div className="App">
            <AppHeader/>
            <MultiBloom/>
        </div>
    );
}

export default App;
