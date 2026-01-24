import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
    return (
        <article>
            <header>
                {imageURL && <img src={imageURL} alt={name} style={{ borderRadius: '8px', marginBottom: '1rem' }} />}
                <h3>{name}</h3>
            </header>
            <p>{description}</p>
            <footer>
                <a href={url} target="_blank" rel="noreferrer" role="button" className="secondary">Visit Page</a>
                <Link to={`/view/${id}`} role="button" style={{ marginLeft: '10px' }}>Details</Link>
            </footer>
        </article>
    );
};

export default Card;
