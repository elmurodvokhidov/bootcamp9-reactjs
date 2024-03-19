import React, { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg",
    "https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D"
  ];

  const leftFun = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const rightFun = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen'>
      <div className='flex items-center gap-4'>
        <button className='text-4xl' onClick={leftFun}>{"<"}</button>
        <figure className='w-96 h-64 rounded-lg overflow-hidden bg-red-500'>
          <img className='w-full h-full object-cover' src={slides[index]} alt="image" />
        </figure>
        <button className='text-4xl' onClick={rightFun}>{">"}</button>
      </div>

      <h1 className='text-2xl'>{index + 1 + "/" + slides.length}</h1>
    </div>
  )
}

export default App