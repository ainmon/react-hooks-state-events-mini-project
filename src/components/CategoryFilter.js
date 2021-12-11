import React from "react";



function CategoryFilter({ categories, handleCategorySelect, selectedCategory}) {

  
  const categoryList = categories.map((category) => {
    // class name is based on if category is selected or not
    // className is selected if

    // onClick needs an anonymous function so it doesn't get invoked immediately
    // it will only invoke when we click on our specific filter

    return  <button 
      key={category} 
      className={category === selectedCategory ? "selected" : null} 
      onClick={() => handleCategorySelect(category)}>
      
        {category}
      </button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
