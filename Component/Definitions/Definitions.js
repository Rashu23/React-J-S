import React from 'react'
import "./Definitions.css"

const Definitions = ({word , category ,meanings}) => {
    return (
        <div className="meanings">
          {
              meanings[0] && word && category==='en' &&(
                  <audio 
                  style={{backgroundColor:"#FFF", borderRadius:10}}
                  src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                  controls
                  >
                      your browser doesn't support audio element.
                  </audio>
              )
          }


           { word === "" ? (
           <span className="subTitle">start by typing a word in search</span>
        ) : (
           meanings.map((mean) => 
           mean.meanings.map((item)=> 
            item.definitions.map((def)=>(
                <div 
                className="singleMean"
                style={{backgroundColor:"white", color:"black"}}
                >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor:"black", width:"100%"}}></hr>
                {def.example && (
                    <span>
                        <b>Example : </b>
                    {def.example}
                    </span>
                    )}
                    {def.synonyms &&(
                        <span>
                            <b> Synonyms:</b>
                            {def.synonyms.map((s) => `${s}, `)}
                        </span>
                    )}
                
                
                </div>

            
            ))
           ))
        )}
        
        
        </div>

    );
};

export default Definitions;
