import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import {apiUrl,filterData} from "./data";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import {toast} from "react-toastify";
import Footer from "./Component/Footer";
import Spinner from "./Component/Spinner";

const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [Category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }catch(error){
      toast.error("Oops, Network Issue !");
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2" >
      <div>
          <Navbar/>
      </div>

     <div className="bg-bgDark2">
        <div>
              <Filter filterData={filterData} 
              Category={Category} 
              setCategory = {setCategory}
              />
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>) : (<Cards courses={courses} Category={Category} />)
              }
          </div>
     </div>

     <div>
       <Footer/>
     </div>

    </div>
  );
};

export default App;
