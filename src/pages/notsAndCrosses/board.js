

const Board = () => {
    
    const board = [ 
    ["-","-","-","-","-"],    
    ["|"," ","|"," ","|"," ","|" ], 
    ["-","-","-","-","-"],
    ["|", " ","|"," ","|"," ","|" ], 
    ["-","-","-","-","-"], 
    ["| ", " ","|"," ","|"," ","|"  ],  
    ["-","-","-","-","-"]
    ]  
    
    return (
  <div class="boardAlignment">   
    { 
    board.map((v)=> {  
    return <div>{v.join("")}</div>  
  })
   
    }   
    
    </div>
    );
  };
  
  export default Board;