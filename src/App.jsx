import About from "./about/About"
import Home from "./home/Home"

function App() {
  return (
    <div>
      {/* <h1 className="iphoneSe:text-red-500 font-antiqaStil text-[50px] border-2 border-red-500 w-fit m-5">Hello world!</h1>
      <h5 className="text-red-500 iphoneSe:text-black">Lorem ipsum dolor sit amet.</h5>
      <p className="ipad:bg-slate-700 bg-blue-500 pc:text-5xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum recusandae in, atque voluptatem vero tempore, porro at hic voluptate ut beatae? Incidunt nemo id doloremque, alias dignissimos facilis perferendis nihil.</p> */}
      <Home />
      <About />
    </div>
  )
}

export default App