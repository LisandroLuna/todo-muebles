import React, {useEffect, useState} from 'react';
import '../assets/ItemList.css';
import Item from "./Item";

function ItemList(props){
    const { items } = props;
    const [itemList, setItemList] = useState([]);

    const getItemProm = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {return resolve(data)}, 2000);
        })
    };

    useEffect( () =>{
            getItemProm(items).then(result => {setItemList(result)});
            console.log('Data');
        }, [itemList, items]);

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {itemList.map(item =>
                <Item key={item.id} prod={item}/>
            )}
        </div>
    );
}

export default ItemList;