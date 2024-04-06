  const Contact = () => {
    return (
      <div className="bg-slate-600 w-full h-full pd-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='pt-20 md:pt-20 top-24 md:top-40 left-0 right-0 text-center font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text drop-shadow-[2px_-6px_2px_black]'>
            <h2>CONTACT</h2>
          </div>  
          <div className="flex justify-center items-center h-full">
            <div className="max-w-6xl mx-auto pt-40 flex flex-col lg:flex-row"> 
              {/* Left Side */}
              <div className="lg:w-9/12 lg:pr-4 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">STAFF CO-ORDINATES</h2>
                <p className="text-white">
                  Mr. K.Ramash M.E., (Ph.D)<br/>
                  HOD, <br/>
                  Department of Computer Science,<br/> 
                  Ph: 9787811230 
                </p>
                <p className="text-white pt-7">
                   <br/>
                  Mrs. Dr. J.K. JothiKalpana, M.Tech.,Ph.D. <br/>
                  Professor,<br/>
                  Department of Computer Science,<br/>
                  Ph: 8870301652 
                </p>
                <p className="text-white pt-8">
                 Mr. S.BharathiRaja, M.E., <br/>
                  Assitant Professor <br/>
                  Department of Computer Science,<br/>
                  Ph: 9943464424
                </p>
                <p className="text-white pt-8">
                Mr. K.Veeramanikandan, M.E., (Ph.D) <br/>
                  Assitant Professor <br/>
                  Department of Computer Science,<br/>
                  Ph: 8668056530
                </p>
                <p className="text-white pt-8">
                Mr.N. Gobinathan, M.E., (Ph.D) <br/>
                  Assitant Professor <br/>
                  Department of Computer Science,<br/>
                  Ph: 8667409534
                </p>
                {/* Add other staff coordinates here */}
              </div>

              {/* Right Side */}
              <div className="lg:w-96 ">
                <h2 className="text-2xl font-bold text-white mb-4">STUDENT CO-ORDINATES</h2>
                <p className="text-white">
                  Mr.P. Gowri Shankar <br/>
                  Final Year,<br/>
                   Computer Science Engineering,<br/>
                  Ph: 9791864613
                </p>
                <p className="text-white pt-10">
                Mr.K. Bharath <br/>
                  Final Year,<br/>
                  Computer Science Engineering,<br/>
                  Ph: 9345607981
                </p>
                <p className="text-white pt-10">
                  Mr.S.Subash <br/>
                  Final Year, <br/>
                  Computer Science Engineering,<br/>
                  Ph: 9894091972
                </p>
                <p className="text-white pt-10">
                  Mr.V. Mohandass <br/>
                  Final Year, <br/>
                  Computer Science Engineering,<br/>
                  Ph: 9344167375
                </p>
                <p className="text-white pt-10">
                  Mr.V.Varadhan <br/>
                  Final Year, <br/>
                 Computer Science Engineering,<br/>
                  Ph: 6374431404
                </p>
                {/* Add other student coordinates here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Contact
