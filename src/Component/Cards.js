import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
   let courses = props.courses;
   let Category = props.Category;
   const[likedCourses,setLikedCourses] = useState([]);

   function getCourses(){
     if(Category=="All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData=>{
            allCourses.push(courseData);
          } )
        })
        return allCourses;
     }else{
      //only specific category k card render hue
      return courses[Category];
     }
   }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
         {
          getCourses().map( (course)=>(
            <Card key={course.id} course={course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          ))
        }
    </div>
  )
}

export default Cards;