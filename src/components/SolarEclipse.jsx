import Moon from "./Moon.jsx"
import Sun from "./Sun.jsx"

const SolarEclipse = () => {
  return (
    <div className="grid grid-cols-3 w-screen h-screen bg-slate-500">
      <div></div>
      <div className="flex items-center justify-start">
        <Sun />
      </div>
      <div className="flex items-center justify-center">
        <Moon />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <div className="flex space-x-4">
          <button className="px-4 py-2  text-white rounded">Start</button>
          <button className="px-4 py-2  text-white rounded">Pause</button>
          <button className="px-4 py-2  text-white rounded">Reset</button>
        </div>
      </div>
    </div>
)
}

export default SolarEclipse