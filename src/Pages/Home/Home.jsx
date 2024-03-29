import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full h-full">
        <div className='absolute inline-block top-60 left-0 right-0 text-center pt-4 font-bold text-5xl bg-gradient-to-r from-blue-800  to-red-800 text-transparent bg-clip-text drop-shadow-[2px_-6px_2px_black]'>
          <TypeAnimation 
            className="leading-30 tracking-wider "
            style={{ whiteSpace: 'pre-line',  display: 'block' }}
            sequence={[
              `WELCOME YOU ALL \nFOR \nNATIONAL LEVEL SYMPOSIUM\n\nNEUROLUX - 2K24`,
              2000, 
            ]}
            repeat={Infinity}
            speed={10}
          />
        </div>
        <div className='absolute bottom-6 left-0 right-0 text-center'>
          <a href='./Register'><button className="px-6 py-4 shadow-md shadow-red-700 bg-gradient-to-r from-blue-800 to-red-800 text-black rounded-md focus:outline-none focus:ring focus:ring-green-500 text-2xl hover:bg-gradient-to-r hover:from-red-800 hover:to-blue-800 hover:text-white">
            Register Now 
          </button></a> 
          </div>
        <img
          className="w-full h-full object-cover pt-1"
          src="https://www.collegebatch.com/static/clg-gallery/vrs-college-of-engineering-technology-vrscet-villupuram-56397.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Home;
