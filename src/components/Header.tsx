import { useNavigate } from "react-router-dom";
import Button from "./Button";


export default function Header() {
  const navigate = useNavigate();
  return (
    <section className="" >
    <div className="h-20 flex">
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Log out
      </Button>
      </div>
     
      <div className="flex ">
        
        <div className="w-1/2">
        <form className=" pt-5 pl-5"  action="/action_page.php">
        <input className="w-80 h-9 " type="text" placeholder="Search" name="search"/>
        </form>
        </div>
        <div className=" w-3/4 pt-5   ">
        <div className="flex justify-end md:mt-0 space-x-6 rtl:space-x-reverse">

           <img src="../src/assets/imguk.png"></img> 
           <img src="../src/assets/message.png"></img>
           <img src="../src/assets/notification.png"></img>
           <img src="../src/assets/avatar.png"></img>
           <h1>Austin Robertson</h1>
           <p>Marketing Administrator</p>  
        </div>

        
</div>
</div>

</section>
  );
}
