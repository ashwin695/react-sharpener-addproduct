import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper"
import Card from "../UI/Card";
import Button from '../UI/Button';

const AddProduct = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef(); // Add a ref for the college name input
    const categoryRef = useRef()

    const HandleAddUser = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value; // Get the college name input value
        const enteredCategory = categoryRef.current.value

        
        props.onAddUser(enteredName, enteredUserAge, enteredCollegeName, enteredCategory);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = ''; // Clear the college name input
        categoryRef.current.value = ''
    };

    return (
        <Wrapper>
            <Card>
                <form onSubmit={HandleAddUser}>
                    <label htmlFor="username">Product Id</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Selling Price</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <label htmlFor="college">Product Name</label>
                    <input
                        id="college"
                        type="text"
                        ref={collegeInputRef}
                    />
                    <label htmlFor="college">Category</label>
                    <select ref={categoryRef} name="cars" id="college">
                        <option value="Electronics">Electronics</option>
                        <option value="Food">Food</option>
                        <option value="SkinCare">SkinCare</option>
                    </select>
                    <Button type="submit">Add Product Info</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddProduct;