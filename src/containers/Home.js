import '../assets/Home.css';
import React  from "react";
import ItemList from "../components/ItemList";
import itemList from "../data/muebles.json"

function Home({greeting}) {
    return (
        <div className={"col-lg-12 home"}>
            <h1 className={"display-4 text-center"}>Todo Muebles</h1>
            <p className={"lead text-center"}>{ greeting }</p>
            <div className={"col-md-9 mx-auto"}>
                <ItemList items={itemList}/>
            </div>
        </div>
    );
}

export default Home;