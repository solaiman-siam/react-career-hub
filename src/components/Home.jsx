import Banner from "./Banner"
import CategoryList from "./CategoryList"
import Jobs from "./Jobs"

function Home() {
  return (
    <div className="container lg:px-16 px-6 mx-auto">
        <Banner></Banner>
        <CategoryList></CategoryList>
        <Jobs></Jobs>
    </div>
  )
}

export default Home