import '../assets/ItemDetCont.css';
import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";
import ItemDetSkeleton from "../components/ItemDetSkeleton";
import itemData from "../data/muebles.json"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loadState, setLoadState] = useState(true);

    const getItemProm = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {return resolve(data)}, 3000);
        })
    };

    useEffect( () =>{
        getItemProm(itemData)
            .then(resolve => {
                resolve.map(function (i) {
                    if(i.id == id){
                        setItem(i);
                    }
                })
            })
            .finally(() => {
                setLoadState(false)
            });
    }, []);

    return (
        <div className={"col-lg-12 home"}>
            <div className={"col-md-9 mx-auto p-5"}>
                {loadState ? <ItemDetSkeleton /> : <ItemDetail item={item}/>}
            </div>
        </div>
    );
}

export default ItemDetailContainer;