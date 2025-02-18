import React, { useEffect, useState } from 'react'

function ItemList({adminItems, search}) {

    const [searchTerm, setSearchTerm] = useState(search);
    const [items, setItems] = useState(adminItems.data);

    useEffect(() => {
        setItems(adminItems.data);
    }, [adminItems]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // You can use Inertia’s `visit` method to submit the form with the search term
        // Inerti.get('/admin/items', { search: searchTerm });
    };
  return (
    <div>ItemList</div>
  )
}

export default ItemList