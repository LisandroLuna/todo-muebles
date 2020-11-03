import React, {useState} from 'react';
import '../assets/ItemList.css';
import Item from "./Item";

function ItemList(){
    const [prod, setProd] = useState([
        { id:1, title:'Escritorio Simple', desc:'Nulla tellus in sagittis dui vel nisl duis ac nibh.', price:'$4850.79', stock:3 },
        { id:2,title:"Ropero Pino",desc:"Donec diam neque vestibulum eget vulputate.",price:"$7153.11",stock:2},
        { id:3,title:"Mesa de Luz",desc:"Donec ut dolor morbi vel lectus in quam fringilla rhoncus.",price:"$9683.02",stock:24},
    ]);
    return (
        <div className="row row-cols-1 row-cols-md-3">
                {prod.map(u =>
                    <div className="col mb-4">
                        <Item prod={u}/>
                    </div>
                )};
        </div>
    );
}

export default ItemList;