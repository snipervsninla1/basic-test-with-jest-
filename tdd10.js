const numEven=(nbrPaire)=>{
    
        let paire = [];
        
        for (let i = 1; i <= nbrPaire; i++) {
          if (i % 2 === 0) {
            paire.push(i);
          }
        }
        
        return paire;
      }

      module.exports=numEven;