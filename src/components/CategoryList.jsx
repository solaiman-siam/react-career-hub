import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center pb-4">
          Job Category List
        </h1>
        <p className="text-[#757575] font-medium text-center w-7/12 pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {
          category.map((cards, index) => <CategoryCard  key={index} cards={cards}></CategoryCard>)
        }
      </div>
    </div>
  );
}

export default CategoryList;
