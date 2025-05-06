import React from 'react'

function About() {
  return (
    <div className='flex justify-center items-center bg-slate-200 h-screen w-full'>
    <div className='flex justify-center  font-bold items-center flex-col bg-slate-200 h-screen w-1/2'> 
        <h1 className='  text-4xl text-red-950 p-5' >This is the about page</h1>
        <p className='p-5 border '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ducimus quisquam perferendis nemo, aliquam nobis nulla reiciendis repudiandae, ratione iste minus accusantium adipisci architecto non deserunt saepe hic dignissimos quaerat?</p>
    </div>
    </div>
  )
}

export default About