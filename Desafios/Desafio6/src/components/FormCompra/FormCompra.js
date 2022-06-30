import React, { useState } from 'react';
import { Alert } from '@mui/material';


const FormCompra = ({}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });


    const handlerSubmit = (event) => {
        event.preventDefault();
        
    }

    const handlerChangeInputs = (target) => {
        setUser({
            ...user,
            [target.name]:target.value
        });
    }
    const final = () => {
        const mje = <Alert severity="success">This is a success alert — check it out!</Alert>
        return mje
    };

    return (
        <div className='finalizarCompra'>
            <h2> Finalizar Compra </h2>
            <h3> Datos Personales </h3>

            <form className='formStyle' onSubmit={handlerSubmit} onChange={({target})=>{handlerChangeInputs(target)}}>
                <div>
                    <label className='labelForm'>Nombre:
                        <input type="text" name="name" value={user.name}  />
                    </label>
                </div>
                <div>
                    <label className='labelForm'>Email:
                        <input type="email" name="email" value={user.email}  />
                    </label>
                </div>
                <div>
                    <label className='labelForm'>Telefono:
                        <input type="number" name="phone" value={user.phone}  />
                    </label>
                </div>    
                <div>
                    <input type="submit" value="Finalzar Compra" onClick={final} />
                </div>
            </form>    
        </div>
    )
};

export default FormCompra