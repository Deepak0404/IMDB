import React from 'react';

function SingleCard({items}){
    return(
        <div className="card">
             {items.map((item) => (
                <ul>
                    <li>Title of the Movie: <span>{item.movie_title}</span></li>
                    <li>Director's name: <span>{item.director_name}</span></li>
                </ul>
            ))}
        </div>
    )
}

export default SingleCard;