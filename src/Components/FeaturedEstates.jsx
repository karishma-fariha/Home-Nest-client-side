import React from 'react';
import EstateCard from './EstateCard';

const FeaturedEstates = ({ estates }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {
                estates.map(estate => (
                    <EstateCard
                        key={estate.id}
                        estate={estate}
                    ></EstateCard>
                ))
            }
            
        </div>
    );
};

export default FeaturedEstates;