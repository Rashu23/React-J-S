import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect,useState } from "react";
import Definitions from "./Component/Definitions/Definitions";
import Header from "./Component/Header/Header";
import {Switch,withStyles}from "@material-ui/core";

import{grey}from "@material-ui/core/colors"
import "./App.css";

function App(){
 const [meanings,setMeaning]= useState("");
 const [word,setWord]= useState([]);
 const [category,setCategory]= useState(["en"]);
 const [LightTheme,setLightTheme]= useState(["false"]);
 



    const dictionaryApi= async()=>{
        try{
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
            console.log(data)
            setMeaning(data.data)
        
        }catch(error){
            console.log(error);
        }
    };
// console.log(meanings)
useEffect(() => {
    dictionaryApi();
}, [word,category,meanings])
const PurpleSwitch=withStyles({
    switchBase:{
        color:grey[50],
        "&$checked":{
            color:grey[900],
        },
        "&$checked + $track":{
            backgroundColor:grey[500],
        },
    },
    checked:{},
    track:{},

})(Switch);

    return(
    <div className="App" 
    style={{height:'100vh', backgroundColor:LightTheme?"#fff":"#282c34",color:LightTheme?"black":"white",transition:"all 0.5s linear",
    }}>
<Container maxWidth="md" 
style={{display:'flex',flexDirection:'column',height:'100vh',justifyContent:"space-evenly",}}>
<div style={{position:"absolute",top:0,right:15,paddingTop:10}}>
    <span>
        {LightTheme?"Dark":"Light"}Mode
    </span>
    <PurpleSwitch
    checked={LightTheme}
    onChange={()=>setLightTheme(!LightTheme)
    }
    ></PurpleSwitch>
</div>

<Header
category={category}
setCategory={setCategory}
word={word}
setWord={setWord}
LightTheme={LightTheme}/>
{meanings && (           

    <Definitions
    word={word} 
    category={category} 
    meanings={meanings}
LightTheme={LightTheme}
    />
    )}
</Container>
    </div>
    )}
 export default App;