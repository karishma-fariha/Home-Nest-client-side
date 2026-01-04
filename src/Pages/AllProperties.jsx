import React, { useEffect, useState } from 'react';
import AllProperty from '../Components/AllProperty';
import { LayoutGrid } from 'lucide-react';
import Loading from './Loading';

const AllProperties = () => {
    const [estates, setEstates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://home-nest-server-side.vercel.app/properties`)
            .then(res => res.json())
            .then(data => {
                setEstates(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='min-h-screen bg-base-100 pt-10 pb-20'>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-base-300 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
                            <LayoutGrid size={16} />
                            <span>Inventory</span>
                        </div>
                        <h1 className='text-4xl font-black text-base-content'>Property Explorer</h1>
                    </div>
                    <p className='text-base-content/60 max-w-md md:text-right'>
                        Browse through our verified collection of residential and commercial properties across Dhaka.
                    </p>
                </div>

                {loading ? (
                    <Loading></Loading>
                ) : (
                    <AllProperty estates={estates} />
                )}
            </div>
        </div>
    );
};

export default AllProperties;