import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import "./Category.css";
import mockData from "../../db.json"
import { getCategory, setCategory } from '../../store/exampleSlice';
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const [categories, setCategories] = useState(mockData.categories);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
const dispatch = useDispatch()
  const category = useSelector(getCategory)

  // useEffect(()=>{
    //api call and get the data
 //   setCategories(data from the api)
  // },[])

  console.log(category);
  
  const handleCategory = (e:ChangeEvent<HTMLSelectElement>)=>{
    setSelectedCategory(e.target.value)
  }

  const viewCategoryPosts = ()=>{
    dispatch(setCategory(selectedCategory))
  }

  const addNew = ()=>{
    setCategories((curr)=>{
      return [...curr,newCategory]
    })
    setNewCategory("")
  }

  return (
    <div>
      <div>
        <h1>View By Category</h1>
        <select onChange={handleCategory}>
        <option value="">All</option>
          {categories.map((cat,index)=>{
            return <option key={index}>{cat}</option>
          })}
        </select>
        <button onClick={viewCategoryPosts}>View Category Post</button>

      </div>
      <div>
        <h1>Add New Category</h1>
        <input type="Category Name" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)} />
        <button onClick={addNew}>Add Category</button>
      </div>
    </div>
  )
}

export default Category
