import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
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
            console.error('Error adding creator:', error);
        } else {
            window.location = "/"; // Send user back to the gallery
        }
    };

    return (
        <main>
            <h1>Add a New Creator 🚀</h1>
            <form onSubmit={createCreator}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />

                <label htmlFor="url">Channel URL</label>
                <input type="url" id="url" name="url" onChange={handleChange} required />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="3" onChange={handleChange} required></textarea>

                <label htmlFor="imageURL">Image URL (Optional)</label>
                <input type="url" id="imageURL" name="imageURL" onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default AddCreator;
