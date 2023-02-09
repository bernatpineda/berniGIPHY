import React, { useState } from "react";

const AddCategory = ({setCategory}) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const searchGif = e => {
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        //console.log("enter form");
    }
    return (
        <>
        <form onSubmit={searchGif}>
            <input className="Input-Search" type="text" placeholder="Search..."
            onChange={e => setValue(e.target.value)}
            value={value}
            />

        </form>
        { error ? <p className="error">It's not possible to stay empty...</p> : ""}
        </>
    );
}

export default AddCategory;
