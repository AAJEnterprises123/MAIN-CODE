import React, { useState } from 'react'
import { BsStarFill } from 'react-icons/bs';

const Stars = () => {

    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleMouseOver = (hovered) => {
        setHoveredRating(hovered);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const handleClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((_, index) => (
                <BsStarFill
                key={index}
                className={`star ${index < rating ? 'filled clicked' : index < hoveredRating ? 'hovered' : ''}`}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index + 1)}
                
                />
            ))}
        </div>
    );
}
export default Stars;