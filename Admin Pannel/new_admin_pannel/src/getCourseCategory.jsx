import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetCourseCategory = () => {
    const [category, setCourseCategories] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3001/getCourseCategory')
      .then((res)=>res.json())
      .then((d)=>setCourseCategories(d))
    }, [])
    console.log(category);
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Descriptijkldsjflkjson</th>
              <th>Image Link</th>
            </tr>
          </thead>
          <tbody>
            {
              category.map(category => {
                return <tr>
                  <td>{category.CategoryId}</td>
                  <td>{category.CategoryName}</td>
                  <td>{category.Description}</td>
                  <td>{category.Image}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
}

export default GetCourseCategory