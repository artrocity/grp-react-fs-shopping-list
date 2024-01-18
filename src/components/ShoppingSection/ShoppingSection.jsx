// Import Modules
import { useState, useEffect } from "react";
import axios from 'axios';

// Create a function to handle the 
function ShoppingSection () {
    let [shoppingList, setShoppingList] = useState([]);

    // Initially load data on DOM
    useEffect(() => {
        fetchList();
    }, []);

    // Create a function to make a get request to fetch the data
    const fetchList = () => {

        return axios.get('/api/shopping')
        .then((response) => {
            // Print out server data
            console.log("Server Data: ", response);

            // Assign response.data to shopping list
            setShoppingList(response.data)
            console.log("Shopping List Data: ", response.data);
        })
        .catch((error) => {
            console.error("Error Fetching data - GET - : ", error);
        })
    };

    // Function to reset all items in list to a purchased status of False
    const resetPurchasedStatus = () => {
        console.log("Hi");
    }

    // Function to clear (delete) all items from the database
    const deleteAllItems = () => {
        // Make query
        return axios.delete('/api/shopping')
        .then((response) => {
            fetchList()
        })
        .catch((error) => {
            console.error("Error Deleting data - Delete - : ", error);
        })
    }

    // Return JSX to APP
    return (
        <>
            <h1>Shopping List: </h1>
            <button onClick={deleteAllItems}>Clear Shopping List</button>
            <button onClick={resetPurchasedStatus}>Reset Purchased Status</button>
            {shoppingList.length === 0 && <p>No Shopping Items Found</p>}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity} {item.unit}</td>
                        <td><button className="btn btn-secondary">Remove Item</button></td>

                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

// Export module
export default ShoppingSection;