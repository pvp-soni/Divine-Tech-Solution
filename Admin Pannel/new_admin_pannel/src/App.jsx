import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [courseCategories, setCourseCategories] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getCourseCategory')
    .then(courseCategories => setCourseCategories(courseCategories.data))
    .catch(err => console.log(err)) 
  }, [])
  console.log(courseCategories);
  
  return (
    <div>
      <center>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image Link</th>
          </tr>
        </thead>
        <tbody>
          {
            courseCategories.map(courseCategory => {
              <tr>
                <td>{courseCategory.CategoryId}</td>
                <td>{courseCategory.CategoryName}</td>
                <td>{courseCategory.Description}</td>
                <td>{courseCategory.Image}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;
