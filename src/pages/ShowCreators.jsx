import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: false });

            if (!error) setCreators(data);
        };
        fetchCreators();
    }, []);


    return (
        <div className="grid">
            {creators.length > 0 ? (
                creators.map(c => <Card key={c.id} {...c} />)
            ) : (
                <p>No creators found. Time to add your favorites! ✨</p>
            )}
        </div>
    );
};

export default ShowCreators;
