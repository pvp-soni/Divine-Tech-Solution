import React from 'react'
import "../Pages/Sub_Training.css"

const ShortTime = () => {
    const ShortTimeCources = [
        {
            id: 1,
            name:"php & Laravel",
            topics:["core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","HTML & HTML 5","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 2,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","core PHP","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 3,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 4,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 5,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 6,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","core PHP","CSS & CSS 3","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },
        {
            id: 7,
            name:"php & Laravel",
            topics:["core PHP","HTML & HTML 5","CSS & CSS 3","core PHP","core PHP","core PHP","core PHP","Database conectivity","Advance PHP","File Handling","MVC","Laravel Framework", "Laravel framework and Migration","Laravel Controllers Routes","Aplication to industrial Project"    ],

        },

    ]
  return (
    <>
     <div className=''>
        {
            ShortTimeCources.map((item,index)=>{
                return(
                   <div className='Short_term_card' key={index}>
                   
                    <div className="course-header">
                    <div className="step-circle">{item.id}</div>
                        <h2> {item.name}</h2>
                    </div>
  

                    <div class="course-content">
                           {
                                item.topics.map((sub_item,sub_index) => {
                                    return (
                                        <div className='topics' key={sub_index} > {sub_item} </div>
                                
                                    )
                                    })
                           } 
                    </div>

                    {/* <div className='topics'>Core PHP</div>
                    <div className='topics'>HTML & HTML5</div>
                    <div className='topics'>CSS & CSS3</div>
                    <div className='topics'>Database Connectivity</div>
                    <div className='topics'>Advance PHP</div>
                    <div className='topics'>Application to industrial project</div>
                    <div className='topics'>File Handling</div>
                    <div className='topics'>MVC</div>
                    <div className='topics'>Laravel Framework</div>
                    <div className='topics'>Laravel Forms & Migration</div>
                    <div className='topics'>Laravel Controllers & Routes</div> */}
                </div>
                    
                )
            })
        }

</div> 


      
{/* </div> */}
</>
  )
}

export default ShortTime