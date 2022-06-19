import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { db } from '../../firebase';

export const EditItem = () => {
    
        const { id } = useParams();

        const initialState = {
            id: 0,
        title: "",
        stock: 0,
        price: 0,
        url: "",
        category_id: 0
    };

    const [formValues, setFormValues] = useState(initialState);
    const [previewImage, setPreviewImage] = useState();
    const [formImage, setFormImage] = useState()
    let newImage = null;

    useEffect(() => {
        const docRef = doc(db, "items", id);
        getDoc(docRef)
            .then(doc => {
                setFormValues({
                    id: doc.data().id,
                    title: doc.data().title,
                    stock: doc.data().stock,
                    price: doc.data().price,
                    url: doc.data().url,
                    category_id: doc.data().category_id
                });
                setPreviewImage(doc.data().url);
            })
            .catch(error => { console.log(error); });
    }, [id]);

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };

    const handleImageChange = (event) => {
        setFormImage(event.target.files[0]);
        const previewImage = URL.createObjectURL(event.target.files[0]);
        setPreviewImage(previewImage);
    };

    const handleEditItem = async (event) => {
        event.preventDefault();

        const docRef = doc(db, "items", id);

        newImage = null;

        if (typeof formImage !== "undefined") {
            const storage = getStorage();
            const imageName =  (+new Date()).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);
            const uploadImage = await uploadBytes(storageRef, formImage);
            newImage = await getDownloadURL(uploadImage.ref);
        }
        const updatedItem = {
            ...formValues,
            image: newImage ? newImage : previewImage
        };
        updateDoc(docRef, updatedItem)
         .then(doc => console.log("Edited correctly"))
         .catch(error => { console.log(error); });
    };
    const handleDeleteItem = (e) => {
        e.preventDefault();
        const docRef = doc(db, "items", id);
        deleteDoc(docRef)
            .then(doc => console.log("Deleted correctly"))
            .catch(error => { console.log(error); });
    };
    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleEditItem}>
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
            <button type="submit">Done</button>
            </form>
            <button onClick={handleDeleteItem}>Eliminar Item</button>
        </div>
    );
}