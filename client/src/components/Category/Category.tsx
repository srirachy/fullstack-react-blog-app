import React, { ChangeEvent, useState, useEffect } from 'react';
import './Category.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, setCategory } from '../../store/exampleSlice';
import { getData } from '../../utils/API';

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const category = useSelector(getCategory);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData('categories/');
      setCategories(res.data);
    };
    fetchData();
  }, []);

  console.log(category);

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const viewCategoryPosts = () => {
    dispatch(setCategory(selectedCategory));
  };

  const addNew = () => {
    // setCategories((curr) => {
    //   return [...curr, newCategory];
    // });
    setNewCategory('');
  };

  return (
    <div>
      <div>
        <h1>View By Category</h1>
        <select onChange={handleCategory}>
          <option value="">All</option>
          {categories.map((cat: any) => {
            return <option key={cat}>{cat}</option>;
          })}
        </select>
        <button type="button" onClick={viewCategoryPosts}>
          View Category Post
        </button>
      </div>
      <div>
        <h1>Add New Category</h1>
        <input
          type="Category Name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" onClick={addNew}>
          Add Category
        </button>
      </div>
    </div>
  );
}

export default Category;
