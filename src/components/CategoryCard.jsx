

function CategoryCard({cards}) {
    const {id, logo, category_name, availability} = cards
    
    
  return (
    
        <div className="bg-[#f4f4f4] rounded-xl p-8">
           <div className="p-4 bg-[#e9e9e9] w-fit rounded-xl"><img src={logo} alt="" /></div>
           <h3 className="pt-7 text-lg font-extrabold">{category_name}</h3>
           <h4 className="pt-2 text-[#A3A3A3] font-medium">{availability}</h4>
        </div>
    
  )
}

export default CategoryCard