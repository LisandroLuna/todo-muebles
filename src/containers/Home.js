import '../assets/Home.css';
import React from "react";
import ItemList from "../components/ItemList";

function Home({greeting}) {
    return (
        <div className={"col-lg-12 home"}>
            <h1 className={"display-4 text-center"}>Todo Muebles</h1>
            <p className={"lead text-center"}><i className="fas fa-tools"></i></p>
            <p className={"lead text-center"}>{ greeting }</p>
            <div class={"col-md-9 mx-auto"}>
                <ItemList/>
            </div>
        </div>
    );
}

export default Home;