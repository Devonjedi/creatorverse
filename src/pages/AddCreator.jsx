import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const createCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL
            });

        if (error) {
            console.error('Error adding creator:', error.message);
        } else {
            window.location = "/";
        }
    };

    return (
        <main className="container">
            <h1>Add a New Creator 🚀</h1>
            <form onSubmit={createCreator}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} required />
                <label>Channel URL</label>
                <input type="url" name="url" onChange={handleChange} required />
                <label>Description</label>
                <textarea name="description" rows="3" onChange={handleChange} required></textarea>
                <label>Image URL (Optional)</label>
                <input type="url" name="imageURL" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default AddCreator;
