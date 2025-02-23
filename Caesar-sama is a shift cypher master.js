//"zbc0".toLowerCase().charCodeAt(0); // 97 ; 122 
// charcode [97,122]    or includes  it 
// 122 -97 equals 25 ; which means x- 97 < 26  & other cond 
//  x < 123 [122 , 97 ]  & x > 96 [ 97, ? ]
/*
since all characters are going to be uppercase testing will be so fucking easy 
"AZ".charCodeAt(1); // 65 ; 90
x < 91 &  x > 64 ; this should be fine 
> we get this 
x > 64 && x < 91 

String.fromCharCode(65+13) ; if > 91 => -26 


*/
let s,o,n,f,rot13=(s)=>{n=s.length,f=""; for(let i=0;i<n;i++){let c=s[i];/* log("c = "+c+" & s["+i+"] = "+s[i])  */;let x=c.charCodeAt(0);  if(x < 91 &  x > 64){x+=13; if(x>90 )x-=26;f+=String.fromCharCode(x)   } else f+=c;}return f}
    function ランチャー１()
    {

    }
    function ランチャー２()
    {
        eval(o);
        // log(typeof document =="undefined" ? 1?"⭕":"💢":"⭕")
        // log(typeof document !="undefined" ? 1?"1️⃣":"💢":"⭕")

        console.warn(typeof document=="undefined" ? (0,":") : typeof document.head.getElementsByTagName('title')[0].childNodes[0]=="undefined" ? (0,":")  : this  ,o); 
    }
    function inject() {
        
        o="n=s.length,f='';for(let i=0;i<n;i++){let c=s[i];  ;let x=c.charCodeAt(0); 超簡単(x,c)}return f" ;
        o="rot13=function(s){"+o+"}";  
        ランチャー２() 

    
    // console.log("injected")
    }

let log=(...a)=>console.log(...a)

    
    function inject2() {
        
        o="n=s.length,f='';for(let i=0;i<n;i++){let c=s[i]; /*log(\"c = \"+c+\" & s[\"+i+\"] = \"+s[i])*/  ;let x=c.charCodeAt(0);  if(x < 91 &  x > 64){x+=13; if(x>90 )x-=26;         f+=String.fromCharCode(x);   } else f+=c;}return f" ;
        o="rot13=function(s){"+o+"}";  
        ランチャー２() 
    
    // console.log("injected")
    }
    function 超簡単(x,c)
    {
            if(x < 91 &  x > 64)
            {
            x+=13; 
                if(x>90)
                x-=26; 
            f+=String.fromCharCode(x);  
            }
            else
            f+=c;//end of  if 
    }

s="SERR PBQR PNZC";
console.clear();
inject2();
rot13("SERR PBQR PNZC")
log(f);

