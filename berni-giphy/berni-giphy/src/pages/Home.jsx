import React,{useState} from "react";
import "../App.css"
import { useAuth0 } from "@auth0/auth0-react";
import AddCategory from "../components/AddCategory";
import DisplayGifs from "../components/DisplayGifs";
import { LoginButton } from "../Login";
import { LogoutButton } from "../Logout";
import { Profile } from "../Profile";


function Home() {
  
     /* const {isAuthenticated}=*/  useAuth0(); 
  const [category, setCategory] = useState("")

  return (
    <div className="App">
       <h2>berni giphy</h2>
           {/* {isAuthenticated ? (
        <> 
         */}
         <>
        <LogoutButton />
        <Profile />
        {/* </> */}
   {/* ) : ( */}
        <LoginButton />
        <useAuth0/>
        </>
   {/* )} */}
       <AddCategory  setCategory={setCategory}/>
       <DisplayGifs category={category}/>
    </div>
  )
}
export default Home;
