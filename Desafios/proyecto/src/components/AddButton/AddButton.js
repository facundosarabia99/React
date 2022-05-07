import React from "react"

export default function AddButton() {
    const [count, setcount] = React.useState(1)
    const stock = 5

    const onAdd = () => {
        if(count < stock) {
        setcount(count + 1)
        }
    }

    const onDecrease = () => {
        if(count> 1) {
            setcount(count - 1)
        }
    }

    const StockButton = ({handleonclick, text}) => {
        return(
            <button className="stock-button" onClick={handleonclick}>
            {text}
            </button>
        )
    }

    const AddButton = () => {
        return(
            <button className="add-button">
            Añadir al carrito
            </button>
        )
    }

    return(
        <div className="add-button-container">
            <StockButton text="-" handleonclick={onDecrease}/>
            <AddButton />
            <StockButton text="+" handleonclick={onAdd}/>
        </div>
    )
}