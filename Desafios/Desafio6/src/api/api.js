import {getDocs, collection, doc} from "firebase/firestore";
import {db} from "../firebase";

function getProducts(){
    return new Promise ((resolve, reject) => {
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection)
    .then(snapshot => {
        console.log({snapshot})
        const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
        resolve (products)
        console.log (products)
    })
    .catch(error => {
        console.log(error)
    })
    });
}

export {
    getProducts,
}
