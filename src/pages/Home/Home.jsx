import { useState } from 'react'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import Header from '../../component/Header/Header'
import './Home.css'
import FoodDisplay from '../../component/FoodList/FoodDisplay';

function Home() {
 
    const [category, setCategory] = useState("All");

  return (
    <div className='home'>
       <Header />
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
    </div>
  )
}

export default Home