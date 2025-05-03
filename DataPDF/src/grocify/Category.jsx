import React from 'react'

const Category = () => {
  return (
   <>
   <section>
    <div  className='p-2 bg-white shadow-md d-flex align-items-center justify-content-between'
    style={{fontWeight:"bold"}}>
        <h2 className=''
        style={{fontWeight:"bold"}}>Category</h2>
        <button className='text-sm border border-warning bg-warning-hover px-3 py-1 rounded'>Add Category</button>
    </div>
   </section>
   </>
  )
}

export default Category