import '../assets/Home.css';
import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import itemData from "../data/muebles.json"
import ItemListSkeleton from "../components/ItemListSkeleton";

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
            <p className={"lead text-center mt-5"}>{ greeting }</p>
            <div className={"col-md-9 mx-auto p-5"}>
                {loadState ? <ItemListSkeleton /> : <ItemList items={itemList}/>}
            </div>
        </div>
    );
}

export default Home;