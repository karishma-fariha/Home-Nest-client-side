import React from 'react';
import EstateCard from './EstateCard';

const AllProperty = ({estates}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-20 mb-5'>
            {
                estates.map(estate=>(
                    <EstateCard
                    key={estate.id}
                    estate={estate}
                    ></EstateCard>
                ))
            }
            
            
        </div>
    );
};

export default AllProperty;