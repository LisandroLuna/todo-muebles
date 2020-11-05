import '../assets/ItemDetCont.css';
import React, {useEffect, useState} from "react";
import ItemDetail from "../components/ItemDetail";
import ItemDetSkeleton from "../components/ItemDetSkeleton";

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loadState, setLoadState] = useState(true);
    const itemData = {"id":3,"title":"maecenas ut massa","descs":"in faucibus orci luctus et proin leo odio porttitor","descl":"congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis","price":"$9881.89","stock":41}

    const getItemProm = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {return resolve(data)}, 3000);
        })
    };

    useEffect( () =>{
        getItemProm(itemData).then(result => {setItem(result)}).finally(() => {setLoadState(false)});
        console.log('Data');
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