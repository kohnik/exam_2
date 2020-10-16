window.onload = function () {


let stroka=document.createElement("input");
stroka.className="stroka"
let symbol=document.createElement("input");
symbol.className="symbol"
let Newsymbol=document.createElement("input");
Newsymbol.className="Newsymbol"
let buttonOk=document.createElement("button");
buttonOk.innerHTML="ok";
document.body.append(stroka)
document.body.append(symbol)
document.body.append(Newsymbol)
document.body.append(buttonOk)




buttonOk.addEventListener("click",start)

function start()
{
    
    
    let stroka=document.querySelector(".stroka").value;
    let symbol=document.querySelector(".symbol").value;
    let Newsymbol=document.querySelector(".Newsymbol").value;
    if(stroka!="" && symbol!="")
    {
        //let newStr= stroka.replace(symbol,Newsymbol)
        let newStr= stroka.split(symbol).join(Newsymbol)
        let div=document.createElement("div");
        
        div.innerHTML=`было: ${stroka}     cтало: ${newStr}`
        document.body.append(div)
    }
    else{
        alert("Вы что-то не дописали")
    }

    }
}


























































