// Import Modules
import { useState } from "react";
import axios from 'axios';

// Create a Function to add a shopping item
function AddItemForm(props) {
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [unitValue, setUnitValue] = useState('');

    // const handleChangeOfOrigin = (event) => {
    //     setOriginValue(event.target.value);
    // };

    const handleSubmitItem = (event) => {
        // Prevent the screen from refreshing
        event.preventDefault();

        // Console Log the values for the items
        console.log('Values for SUBMIT:', {
            name: nameValue,
            quantity: quantityValue,
            unit: unitValue
        });
    
        const newShoppingItem = {
            name: nameValue,
            quantity: quantityValue,
            unit: unitValue
        }
        // post data
        axios.post('/api/shopping', newShoppingItem)
        .then((response) => {
            // on success fetchData

            // props.creatureRefreshCallback();

            // Clear the form fields
            setNameValue('');
            setQuantityValue('');
            setUnitValue('');
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
    };

    return (
        <form onSubmit={handleSubmitItem}>
            <h3>Add an Item</h3>

            {/* Name of The Item */}
            <label for="name">Item: </label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Item Name"
                onChange={(event) => setNameValue(event.target.value)}
                value={nameValue}
            />

            {/* Quantity of The Item */}
            <label for="qty">Quantity: </label>
            <input 
                type="text" 
                name="qty" 
                id="qty" 
                placeholder="Quantity"
                onChange={(event) => setQuantityValue(event.target.value)}
                value={quantityValue}
            />

            {/* Unit of The Item */}
            <label for="unit">Unit: </label>
            <input 
                type="text" 
                name="unit" 
                id="unit" 
                placeholder="Unit of Measurement"
                onChange={(event) => setUnitValue(event.target.value)}
                value={unitValue}
            />

            {/* Button to Submit the form */}
            <button type="submit">Add Item</button>
        </form>
        );
}

// Export The Add Item Form
export default AddItemForm;