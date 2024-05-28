import logo from "../assets/logo.png";
import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";


export default function SignUp() {
  return (
    <section className="md:py-16 bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${logo})` }}>
    <div className="py-8 px-2 mx-auto max-w-screen-xl lg:py-16 rounded-lg shadow-none md:w-1/2 2xl:w-1/3 scroll-pr-60 ">
       

          <span className="self-center text-3xl font-base whitespace-nowrap text-[#232D42]">
            Hope Ui
          </span>
    
        <div className="text-center w-full  p-6 space-y-4 sm:p-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000]">
            Sign In
          </h2>
          <p className="text-[#8A92A6]">Create your Hope UI account</p>
        </div>
        <form className="space-y-6" action="#">

          <div className=" flex justify-center">
          <div className="pr-4">
            <label
              htmlFor="First Name"
              className="block mb-2 text-sm text-[#8A92A6]">First Name</label>
            <input
              type="First Name"
              name="First Name"
              id="First Name"
              className="bg-gray-50 border border-[#3A57E8] text-[#8A92A6] text-sm rounded-lg block  block w-72 p-2   focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>

          <div>
            <label
              htmlFor="Last Name"
              className="block mb-2 text-sm text-[#8A92A6]">Last Name</label>
            <input
              type="Last Name"
              name="Last Name"
              id="Last Name"
              className="bg-gray-50 border border-[#3A57E8] text-[#8A92A6] text-sm rounded-lg block  block w-72 p-2  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>
    </div>

    <div className=" flex justify-center">
          <div className="pr-4">
            <label
              htmlFor="First Name"
              className="block mb-2 text-sm text-[#8A92A6]">Email</label>
            <input
              type="Email"
              name="Email"
              id="Email"
              className="bg-gray-50 border  border-[#3A57E8] border-2 text-[#8A92A6] text-sm rounded-lg block  block w-72 p-2  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>

          <div>
            <label
              htmlFor="Last Name"
              className="block mb-2 text-sm text-[#8A92A6]">Phone Number</label>
            <input
              type="Phone Number"
              name="Phone Number"
              id="Phone Number"
              className="bg-gray-50 border border-[#3A57E8] text-[#8A92A6] text-sm rounded-lg block w-72 p-2  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>
    </div>

         

    <div className=" flex justify-center pb-4">
          <div className="pr-4">
            <label
              htmlFor="First Name"
              className="block mb-2 text-sm text-[#8A92A6]">Password</label>
            <input
              type="PassWord"
              name="PassWord"
              id="PassWord"
              className="bg-gray-50 border  border-[#3A57E8] border-2 text-[#8A92A6] text-sm rounded-lg block  block w-72 p-2  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>

          <div>
            <label
              htmlFor="Last Name"
              className="block mb-2 text-sm text-[#8A92A6]">Confirm Password</label>
            <input
              type="Password"
              name="Password"
              id="Password"
              className="bg-gray-50 border border-[#3A57E8] text-[#8A92A6] text-sm rounded-lg block w-72 p-2  focus:outline-none focus:ring-1 focus:ring-[#3A57E8] "
              placeholder=""
              required/>
          </div>
    </div>

          <div className="flex flex-row justify-center">
            <div className="flex items-center ">
              <input
                id="degree"
                aria-describedby="degree"
                name="degree"
                type="checkbox"
                className="w-5 h-5 border-gray-300 rounded bg-gray-50 accent-[#3A57E8] "
                required
              />
            </div>
            <div className="ms-3 text-sm">
              <label
                htmlFor="remember"
                className="font-base text-base text-[#8A92A6]"
              >
              I agree with the terms of use
              </label>
            </div>

          </div>
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-16 py-3 text-base font-base text-center rounded  text-white bg-[#3A57E8]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto  "
            >
              Sign Up
            </button>
          </div>
        </form>

      </div>


     
<div className="">
      <div className="text-base font-base text-[#232D42] flex justify-center">
            Dont have an account? </div>
    
            <div className="flex justify-center md:mt-0 space-x-5 rtl:space-x-reverse pt-6">
            <a href="#">
              <img className="w-6 h-6"  src={gmail} alt="Gmail" />
              <span className="sr-only">Gmail</span>
            </a>
            <a href="#">
              <img className="w-6 h-6"  src={facebook} alt="Facebook" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#">
              <img className="w-6 h-6"  src={instagram} alt="Instagram" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#">
              <img className="w-6 h-6" src={linkedin} alt="Linkedin" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
          

          
      <div className=" flex justify-center pt-4">
          <div className="">
          Already have an Account    
          <a className="text-blue-600 hover:underline dark:text-blue-500 ml-1">
              <a href="Login">Login</a>
            </a>
            <div/>
     
      </div>
</div>
</div>
    </section>
  );
}