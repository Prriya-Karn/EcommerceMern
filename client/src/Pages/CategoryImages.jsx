import { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const CategoryImages = ({imgData,catName,headCatName,subHeadCatName}) => {
  return (
    <Fragment>
    <div className='text-center mt-12 uppercase'>
    <h1 className='md:text-5xl sm:text-4xl 
           text-3xl mb-5  font-medium'>
        {headCatName}
    </h1>
    <p>{subHeadCatName}</p>
</div>

     {/*------------------ carousel effect start from here ----------------------- */}
     <div className="carousel flex mb-10 mt-2 h-auto p-5">
     {
         imgData.map((e)=>{
             return(
                 <Fragment key={e.id}>
                 {
                     e.categoryImage == catName?
                     
                 <div className="rounded-lg 
                 ml-2 h-72   
                 md:ml-2 md:h-96 
                 lg:ml-5 lg:h-1/2">
     
             <div className="card
                   w-44
                   md:w-56
                   lg:w-72">
                 <figure
                     className="h-60
                     md:h-80
                     lg:h-96">
     
                     <NavLink to={`/products/${e.filename}/${e.price}/${e.productName}`}>
                         <img className="h-full w-full" src={`../../public/images/${e.filename}`} />
                     </NavLink>
                 </figure>
                 {/* Added background color and padding to card-body */}
                 <div className="bg-white rounded-b-lg 
                     p-1
                     lg:p-4a
                      md:p-2">
                     <h2 className="text-center md:text-base text-sm font-medium">{e.productName}</h2>
                     <p className='text-center mt-1'>{e.price}</p>
     
                 </div>
             </div>
     
         </div>:""
                     
                 }
                 </Fragment>
             )
         })}
                 </div>
     
     
    </Fragment>
    
  )
}

export default CategoryImages;