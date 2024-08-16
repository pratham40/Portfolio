import logo from "../assets/avatar.jpg"

function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-6 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-normal  ">
          Hello, I am Pratham
        </h1>
        <p className="text-sm md:text-2xl md:my-4"> I am Website Designer</p>
        <button className="btn bg-blue-600 border-none text-white rounded-3xl mt-2 md:mt-0 ">
          Contact Me
        </button>
      </div>
      <div className="avatar ">
        <div className="ring-primary ring-offset-base-100 w-40 md:w-96 rounded-full ring ring-offset-2">
          <img src={logo} className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
