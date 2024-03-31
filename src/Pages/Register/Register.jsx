const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600 ">
      <div className="w-full h-full">
        <div className='absolute top-24 md:top-40 left-0 right-0 text-center  font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text drop-shadow-[2px_-6px_2px_black] z-10'>
          <h2>REGISTER HERE</h2>
        </div>  
        <div className="text-center">
        <p className="text-lg md:text-3xl text-blue-500">Team Registraion</p>
        <p>note: Only one person per team register this</p>
        <div className="pt-6">
        <a href='https://forms.gle/b8XLTRM3R3cvdRPy7'>
            <button className="px-6 py-4 shadow-md  shadow-red-700 bg-gradient-to-r from-blue-800 to-red-800 text-white rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg md:text-2xl hover:bg-gradient-to-r hover:from-red-800 hover:to-blue-800 hover:text-green-400">
              Register Now 
            </button>
          </a>
          </div>
        </div>
        <div className='absolute bottom-20  md:bottom-10 left-0 right-0 text-center'>
         <p className="text-lg md:text-3xl text-blue-500">Individual Registration</p>
         <p>note: All the member in the team register this</p>
         <div className="pt-10">
          <a href='https://forms.gle/QpTgrGqkj7Wcog7z9'>
            <button className="px-6 py-4 shadow-md  shadow-red-700 bg-gradient-to-r from-blue-800 to-red-800 text-white rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg md:text-2xl hover:bg-gradient-to-r hover:from-red-800 hover:to-blue-800 hover:text-green-400">
              Register Now 
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
