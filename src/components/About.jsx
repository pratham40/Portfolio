import {IoArrowForward} from "react-icons/io5"
function About() {
  return (
    <div id="about" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 bg-gray-600 rounded-2xl p-12 ">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold my-7">About</h2>
          <div className=" md:flex flex-wrap flex-col md:flex-row items-center gap-6 ">
            <img src="https://camo.githubusercontent.com/19db51af5f90f1b152bc0b9078f5fe97053955be5074f03f17019c70345bdcdb/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" className="md:h-80 rounded-2xl" />
            <ul>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className=" md:mt-1 "/>
                    <span className="w-96">
                        <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
                        <p className="text-sm md:text-md ">Creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className=" md:mt-1 "/>
                    <span className="w-96">
                        <h1 className="text-xl md:text-2xl font-semibold">DataBase Developer</h1>
                        <p className="text-sm md:text-md ">Ability to design, create, and manage databases like MongoDB,SQL,NOSQL.</p>
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className=" md:mt-1 "/>
                    <span className="w-96">
                        <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
                        <p className="text-sm md:text-md ">Build and maintain the mechanisms that process data and perform actions on websites</p>
                    </span>
                </div>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default About;
