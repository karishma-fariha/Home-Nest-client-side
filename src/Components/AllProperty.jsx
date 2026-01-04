import React, { useState, useMemo } from 'react';
import EstateCard from './EstateCard';
import { Search, ChevronLeft, ChevronRight, SearchX, ArrowUpDown } from 'lucide-react';

const AllProperty = ({ estates }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const processedEstates = useMemo(() => {
        let result = [...estates];

        if (searchQuery) {
            result = result.filter(item => 
                item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.location?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== "All") {
            result = result.filter(item => item.category === selectedCategory);
        }

        if (sortOrder === "low-to-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-to-low") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [estates, searchQuery, selectedCategory, sortOrder]);

    const totalPages = Math.ceil(processedEstates.length / itemsPerPage);
    const currentItems = processedEstates.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-8">
                <div className="w-1/3 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search by name or location..." 
                        className="input input-bordered w-full pl-12 h-14 bg-base-200 border-none focus:ring-2 ring-primary/20"
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
                    />
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <select 
                        className="select select-bordered h-14 bg-base-200 border-none"
                        value={selectedCategory}
                        onChange={(e) => {setSelectedCategory(e.target.value); setCurrentPage(1);}}
                    >
                        <option value="All">All Categories</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>

                    <div className="relative flex items-center">
                        <ArrowUpDown className="absolute left-4 opacity-40 pointer-events-none" size={18} />
                        <select 
                            className="select select-bordered h-14 pl-12 bg-base-200 border-none"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Sort by: Default</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {currentItems.length > 0 ? (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12'>
                        {currentItems.map(estate => (
                            <EstateCard key={estate._id || estate.id} estate={estate} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-10">
                            <button 
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="btn btn-square btn-outline border-base-300 disabled:opacity-30"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <div className="join">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`join-item btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-ghost border-base-300'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button 
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="btn btn-square btn-outline border-base-300 disabled:opacity-30"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-24 bg-base-200/50 rounded-3xl border-2 border-dashed border-base-300">
                    <SearchX size={60} className="mx-auto opacity-20 mb-4" />
                    <h3 className="text-xl font-bold">No properties found</h3>
                    <p className="opacity-60">Try adjusting your filters or search keywords.</p>
                </div>
            )}
        </div>
    );
};

export default AllProperty;