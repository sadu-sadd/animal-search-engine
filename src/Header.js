const React = require("react");
const R= require( "../public/CSS/main.css");
const Paw= require( "../public/Images/paw.png");


const Header=()=>{
    return(
    <header>
        <div id="symbol">
            <img src={paw} alt="ASE Symbol" title="ASE Symbol"/>
        </div>
        <h1 id="logo" title="Animal Search Engine">Animal Search Engine</h1>
    </header>
    )
};

export default Header;