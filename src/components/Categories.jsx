import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
