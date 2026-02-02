import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase.from('creators').select().eq('id', id).single();
            if (data) setCreator(data);
        };
        fetchCreator();
    }, [id]);

    if (!creator) return <article aria-busy="true"></article>;

    return (
        <main className="container">
            <article>
                <header><h1>{creator.name}</h1></header>
                {creator.imageURL && (
                    <img src={creator.imageURL} alt={creator.name} style={{ width: '100%', borderRadius: '8px' }} />
                )}
                <p><strong>Description:</strong> {creator.description}</p>
                <p><strong>URL:</strong> <a href={creator.url} target="_blank" rel="noreferrer">{creator.url}</a></p>
                <footer>
                    <div className="grid">
                        <Link to={`/edit/${creator.id}`} role="button" className="secondary">Edit</Link>
                        <Link to="/" role="button" className="outline">Back to Gallery</Link>
                    </div>
                </footer>
            </article>
        </main>
    );
};

export default ViewCreator;
