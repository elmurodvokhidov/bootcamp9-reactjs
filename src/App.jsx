import React, { useState } from 'react'

function App() {
  const [index, setIndex] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg",
    "https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
  ];

  const leftFun = () => {
    if (index == 0) {
      setIndex(slides.length - 1);
    }
    else {
      setIndex(index - 1);
    }
  };

  const rightFun = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen'>


      <div className='flex items-center gap-4 relative'>
        <button className='text-4xl text-white absolute z-10 left-2' onClick={leftFun}>{"<"}</button>
        <figure className='w-96 h-64 flex overflow-hidden rounded-lg'>
          {
            slides.map(slide => (
              <img className={`w-full h-full object-cover transition-all duration-300 -translate-x-[${index * 100}%]`} src={slide} alt="image" />
            ))
          }
        </figure>
        <button className='text-4xl text-white absolute z-10 right-2' onClick={rightFun}>{">"}</button>
        <h1 className='text-2xl text-white absolute bottom-0 left-[45%]'>{index + 1 + "/" + slides.length}</h1>
      </div>


    </div>
  )
}

export default App