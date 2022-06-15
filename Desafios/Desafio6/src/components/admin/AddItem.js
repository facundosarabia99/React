import React, {useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { db } from '../../firebase';

export const AddItem = () => {
    const initialState = {
        id: 0,
        title: "",
        stock: 0,
        price: 0,
        url: "",
        category_id: 0
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formImagen, setFormImagen] = useState();
    const allInputs = [fromValues.id, formValues.title, formValues.stock, formValues.price, formValues.url, formValues.category_id];

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    };

    const handleImageChange = (event) => {
        setFormImagen(event.target.files[0]);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!allInputs.some(input => input === "")) {
            const itemCollection = collection(db, "items");

            let imagen = "https://via.placeholder.com/200";

            if (typeof formImagen !== "undefined") {
                const storage = getStorage();
                const imageName = (+ new Date()).toString(36);
                const storageRef = ref(storage, `items/${imageName}`);
                const uploadImage = uploadBytes(storageRef, formImagen);
                imagen = await getDownloadURL(uploadImage.ref);
            }

            const newItem = {
                ...formValues,
                imagen: imagen
            };

            addDoc(itemCollection, newItem)
                .then(doc => {console.log(`Saved correctly: ${doc.id}.`)})
                .catch(error => {console.log(error)});
            
            setFormValues(initialState);
            document.querySelector("#imagenInput").value = "";

        }
        else {
            alert("Please fill all the fields.");
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={onSubmit}>
            <div>
                <label>ID</label>
                <input type="number" name="id" value={formValues.id} onChange={handleInputChange} />
            </div>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={formValues.title} onChange={handleInputChange} />
            </div>
            <div>
                <label>Stock</label>
                <input type="number" name="stock" value={formValues.stock} onChange={handleInputChange} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" value={formValues.price} onChange={handleInputChange} />
            </div>
            <div>
                <label>URL</label>
                <input type="text" name="url" value={formValues.url} onChange={handleInputChange} />
            </div>
            <div>
                <label>Category ID</label>
                <input type="number" name="category_id" value={formValues.category_id} onChange={handleInputChange} />
            </div>
            <div>
                <label>Image</label>
                <input type="file" name="imagen" id="imagenInput" onChange={handleImageChange} />
            </div>
            <button type="submit">Add</button>
            </form> 
        </div>
    )
}