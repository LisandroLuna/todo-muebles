import '../assets/Home.css';
import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import itemData from "../data/muebles.json"
import Spinner from "../components/Spinner";

function Home({greeting}) {
    const [itemList, setItemList] = useState([]);
    const [loadState, setLoadState] = useState(true);

    const getItemProm = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {return resolve(data)}, 2000);
        })
    };

    useEffect( () =>{
        getItemProm(itemData).then(result => {setItemList(result)}).finally(() => {setLoadState(false)});
        console.log('Data');
    }, []);

    return (
        <div className={"col-lg-12 home"}>
            <h1 className={"display-4 text-center"}>Todo Muebles</h1>
            <p className={"lead text-center"}>{ greeting }</p>
            <div className={"col-md-9 mx-auto p-5"}>
                {loadState ? <Spinner/> : <ItemList items={itemList}/>}
            </div>
        </div>
    );
}

export default Home;