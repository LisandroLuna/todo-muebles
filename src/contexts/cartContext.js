import React, { useState, useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({children}) {
    const [items, setItems] = useState([]);

    function addItem(newItem){
        if(checkItem(newItem) === false){
            const newItems = [...items, newItem];
            setItems(newItems);
            console.log(newItems);
            console.log('Item added: ' + newItem.title);
        }else{
            //Esta parte no pude hacerla funcionar

/*          const newList = [...items].filter(i => i.id !== newItem.id);
            const olditem = [...items].filter(i => i.id === newItem.id)[0];
            console.log(newItem.total)
            console.log(olditem.total)
            newItem.total += olditem.total;
            console.log(newItem.total)
            const finalList = [...newList, newItem]
            setItems(finalList);
            console.log('Item updated: ' + newItem.title);*/
        }
    }

    function checkItem(item){
        if(items.filter(i => i.id === item.id).length > 0){
            return true;
        }
        return false;
    }

    function removeItem(item){
        const newItems = items.filter(i => i.id !== item.id);
        setItems(newItems);
        console.log('Item removed');
    }

    function clearItems(){
        setItems([]);
    }

    function getSize(){
        let a = 0;
        items.map(i => (a += i.total))
        return a;
    }

    return <CartContext.Provider value={{items, addItem, removeItem, size: getSize(), clearItems}}>
        {children}
    </CartContext.Provider>
}