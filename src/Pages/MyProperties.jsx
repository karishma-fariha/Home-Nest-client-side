import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import PropertyCard from "./PropertyCard";
import UpdateProperty from "../Components/UpdateProperty";

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProperty, setSelectedProperty] = useState(null);


    useEffect(() => {
        if (!user?.email) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const url = `http://localhost:3000/properties?userEmail=${user.email}`;
                const res = await fetch(url);
                const data = await res.json();
                setProperties(data);
            } catch (err) {
                console.log(err)
                alert(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.email]);

    const handleDeleteSuccess = (deletedId) => {
        setProperties((prev) => prev.filter((p) => p._id !== deletedId));
    };

    const handleUpdateClick = (property) => {
    setSelectedProperty(property);
  };

    const handleUpdated = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
    );
  };


    if (loading) return <div className="p-6">Loading...</div>;

    if (!properties.length)
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl font-bold">You have no properties</h2>
                <a href="/addProperties" className="btn btn-primary mt-4">
                    Add Property
                </a>
            </div>
        );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-primary">My Properties</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((prop) => (
                    <PropertyCard
                        key={prop._id}
                        property={prop}
                        onDeleteSuccess={handleDeleteSuccess}
                        onUpdateClick={()=>handleUpdateClick(prop)}
                    />
                ))}
            </div>
            {selectedProperty && (
        <UpdateProperty
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onUpdated={handleUpdated}
        />
      )}
        </div>
    );
};

export default MyProperties;
