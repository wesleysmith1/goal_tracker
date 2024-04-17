import React, { useState, useEffect } from 'react';

const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('api/category/') // Adjust the URL based on your Django server's URL
          .then(response => response.json())
          .then(data => {
              setCategories(data);
          })
          .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li>{category.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryComponent;