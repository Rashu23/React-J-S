import { createMuiTheme, TextField ,ThemeProvider,MenuItem} from "@material-ui/core";
import React from "react"
import "./Header.css";
import categories from "../data/Category";
// import {LightMode}from "@material-ui/core"
const Header = ( {setCategory, category , word, setWord, LightTheme}) => {

 const darkTheme=createMuiTheme({
palette:{
    primary:{
        main: LightTheme ? '#000':'#fff',
    },
    type:LightTheme? 'light':"dark",
},
 });

 const handleChange=(language)=>{
     setCategory(language)
     setWord("")
 }

    return (
        <div className="header">
            <span className="title">{ word ? word : "WORD HUNT"}</span>
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className="search"
            label="Standard"
            label="Search a word" 
            value={word}
             onChange={(e)=> setWord(e.target.value)}
             ></TextField>


             <TextField
             select
             className="select"
             label="language"
             value={category}
             onChange={(e)=> handleChange(e.target.value)}
             >
                 {categories.map((Option)=>(
                   <MenuItem key={Option.label} value={Option.label}>{Option.value}</MenuItem>
                   ))}
             </TextField>

        </ThemeProvider>
        </div>
       </div>
    )
}

export default Header
