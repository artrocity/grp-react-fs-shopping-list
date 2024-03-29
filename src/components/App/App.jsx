// Import modules
import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import ShoppingSection from '../ShoppingSection/ShoppingSection.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <Header />
            <main>
                <AddItemForm />
                <ShoppingSection />
            </main>
        </div>
    );
}

export default App;
