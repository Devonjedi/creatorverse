import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase.from('creators').select().eq('id', id).single();
            if (data) setCreator(data);
        };
        fetchCreator();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase.from('creators').update({
            name: creator.name,
            url: creator.url,
            description: creator.description,
            imageURL: creator.imageURL
        }).eq('id', id);
        window.location = "/";
    };

    const deleteCreator = async () => {
        await supabase.from('creators').delete().eq('id', id);
        window.location = "/";
    };

    return (
        <main className="container">
            <h1>Edit Creator ✍️</h1>
            <form onSubmit={updateCreator}>
                <label>Name</label>
                <input type="text" name="name" value={creator.name} onChange={handleChange} required />
                <label>URL</label>
                <input type="url" name="url" value={creator.url} onChange={handleChange} required />
                <label>Description</label>
                <textarea name="description" rows="3" value={creator.description} onChange={handleChange} required></textarea>
                <label>Image URL (Optional)</label>
                <input type="url" name="imageURL" value={creator.imageURL || ""} onChange={handleChange} />
                <div className="grid">
                    <button type="submit">Update</button>
                    <button type="button" className="outline secondary" onClick={deleteCreator}>Delete</button>
                </div>
            </form>
        </main>
    );
};

export default EditCreator;
