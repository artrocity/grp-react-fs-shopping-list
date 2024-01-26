// Import Modules
import { useState } from 'react';
import axios from 'axios';
import ShoppingSection from '../ShoppingSection/ShoppingSection';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

// Create a Function to add a shopping item
function AddItemForm() {
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
      unit: unitValue,
    });

    const newShoppingItem = {
      name: nameValue,
      quantity: quantityValue,
      unit: unitValue,
    };
    // post data
    axios
      .post('/api/shopping', newShoppingItem)
      .then((response) => {
        // on success fetchData

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
      <FormControl>
        <InputLabel htmlFor="component-outlined">Item</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          label="Item"
          onChange={(event) => setNameValue(event.target.value)}
          value={nameValue}
        />
      </FormControl>

      {/* Quantity of The Item */}
      <FormControl>
        <InputLabel htmlFor="component-outlined">Quantity</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          label="Quantity"
          onChange={(event) => setQuantityValue(event.target.value)}
          value={quantityValue}
        />
      </FormControl>

      {/* Unit of The Item */}
      <FormControl>
        <InputLabel htmlFor="component-outlined">Unit</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue="Composed TextField"
          label="Unit"
          onChange={(event) => setUnitValue(event.target.value)}
          value={unitValue}
        />
      </FormControl>

      {/* Button to Submit the form */}
      <Button type="submit" variant="contained">
        Add Item
      </Button>
    </form>
  );
}

// Export The Add Item Form
export default AddItemForm;
