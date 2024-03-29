import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600 ">
      <div className="w-full h-full">
        <div className='absolute top-20 md:top-40 left-0 right-0 text-center pt-4 font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text drop-shadow-[2px_-6px_2px_black] z-10'>
          <TypeAnimation 
            className="leading-30 tracking-wider"
            style={{ whiteSpace: 'pre-line', display: 'block' }}
            sequence={[
              `WELCOME YOU ALL \nFOR \nNATIONAL LEVEL SYMPOSIUM\n\nNEUROLUX - 2K24`,
              2000,
            ]}
            repeat={Infinity}
            speed={10}
          />
        </div>  
        <div className='absolute bottom-35 md:bottom-6 left-0 right-0 text-center z-10'>
          <a href='./Register'>
            <button className="px-6 py-4 shadow-md  shadow-red-700 bg-gradient-to-r from-blue-800 to-red-800 text-black rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg md:text-2xl hover:bg-gradient-to-r hover:from-red-800 hover:to-blue-800 hover:text-white">
              Register Now 
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
