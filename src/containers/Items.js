import React, {useEffect, useState} from "react";
import ItemList from "../components/ItemList";
import ItemListSkeleton from "../components/ItemListSkeleton";
import { getFirestore } from "../firebase";
import { useParams } from "react-router-dom";

function Items() {
    const { categoryId } = useParams();
    const [itemList, setItemList] = useState([]);
    const [loadState, setLoadState] = useState(true);
    const [errorState, setErrorState] = useState(false);

    useEffect( () =>{
        const getCollection = (itemCollection) => {
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    setErrorState(true)
                }
                setItemList(querySnapshot.docs.map(doc =>{
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                }));
            }).catch(() => {
                setErrorState(true)
            }).finally(() => {
                setLoadState(false)
            })
        }
        const getAll = () => {
            const db = getFirestore();
            const itemCollection = db.collection("items");
            getCollection(itemCollection);
        }
        const getByCatId = (catId) => {
            console.log(catId)
            catId = parseInt(catId);
            const db = getFirestore();
            const itemCollection = db.collection("items").where("categoryId", "==", catId);
            getCollection(itemCollection);
        }
        if(categoryId === undefined || categoryId === null){
            getAll();
        }else{
            getByCatId(categoryId);
        }
    }, [categoryId]);
    return (
        <div className={"col-lg-12 home"}>
            <div className={"col-md-9 mx-auto p-5"}>
                {loadState ? <ItemListSkeleton /> : <ItemList items={itemList}/>}
                {errorState ? <p className={"lead text-center"}>No hay productos que coincidan con tu búsqueda.</p> : ""}
            </div>
        </div>
    );
}

export default Items;