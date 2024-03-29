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
          <button className="mt-8 px-6 py-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 text-2xl">
            Register Now 
          </button>
        </div>
        
        <img
          className="w-full h-full object-cover"
          src="https://www.collegebatch.com/static/clg-gallery/vrs-college-of-engineering-technology-vrscet-villupuram-56397.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Home;
