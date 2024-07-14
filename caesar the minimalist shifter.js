    let n,f,rot13=function(s){n=s.length,f=""; for(let i=0;i<n;i++){let c=s[i];/* log("c = "+c+" & s["+i+"] = "+s[i])  */;let x=c.charCodeAt(0);  if(x < 91 &  x > 64){x+=13; if(x>90 )x-=26;f+=String.fromCharCode(x)   } else f+=c}return f}
    log=(...a)=>console.log(...a)
    // let o; 
    //let s="SERR PBQR PNZC";
    console.clear();
    log(rot13("SERR PBQR PNZC"));

    log(rot13("SERR CVMMN!"));

    log(rot13("SERR YBIR?")); 

    log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

    /*   o="for(let i=0;i<n;i++){let c=s[i]; let x=c.charCodeAt(0);  if(x < 91 &  x > 64){x+=13; if(x>90 )x-=26;         f+=String.fromCharCode(x);   } else f+=c;}return f" ;
        o="rot13=function(s){"+o+"}";   */

    /*
    rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
    Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
    Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
    Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. 
    */
    
    