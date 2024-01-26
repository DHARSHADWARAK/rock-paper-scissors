let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";

        document.querySelector("#mode").style.backgroundColor="blueviolet";
        document.querySelector("#mode").style.color="yellow";

    }
    else if(currMode==="dark"){
        currMode="violet";
        document.querySelector("body").style.backgroundColor="blueviolet";
        document.querySelector("body").style.color="black";

        document.querySelector("#mode").style.backgroundColor="rgb(234, 221, 221)";
        document.querySelector("#mode").style.color="black";
    }
    else if(currMode==="violet"){
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";

        document.querySelector("#mode").style.backgroundColor="black";
        document.querySelector("#mode").style.color="white";
    }
    console.log(currMode);
}
);