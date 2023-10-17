const lift=document.querySelector(".liftbox");
const down=document.getElementById("downbutton");
const up=document.getElementById("upbutton");
const mup=document.getElementById("midupbutton");
const mdown=document.getElementById("middownbutton");




//sound on reaching floor
const liftReach=()=>{
    let liftSound=new Audio(
        "imgsound/fm-elevator-bell-41820.mp3");
    liftSound.loop=false;
    liftSound.play();
};

let currentFloor=0;
let md=0,mu=0;

//function to reach floor
const floorFunction= (floor) =>{
    console.log(floor);
    if(floor==2){
        lift.style.top = "4.5vh";
    }
    else if (floor==1){
        lift.style.top  ="38.5vh";
    }
    if(floor == 0){
        lift.style.top = "72vh";
    }
    currentFloor = floor;

};


//function for up function

const upFunction=()=>{
    up.style.backgroundColor="green";
    if(currentFloor==0){
        if(mu==true){
            floorFunction(1);
            setTimeout(() => {
                liftReach();
                up.style.backgroundColor="white";
            },5000);
        }else{
            lift.style.transition="10s linear";
            floorFunction(2);
            setTimeout(() => {
                up.style.backgroundColor="white";
                lift.style.transition="5s linear";
                liftReach();
            }, 10000);
        }
    }
};


const downFunction=()=>{
    down.style.backgroundColor="green";
    if(currentFloor==2){
        if(md==true){
            floorFunction(1);
            setTimeout(() => {
                liftReach();
                down.style.backgroundColor="white";
            },5000);
        }else{
            lift.style.transition="10s linear";
            floorFunction(0);
            setTimeout(() => {
                down.style.backgroundColor="white";
                lift.style.transition="5s linear";
                liftReach();
            }, 10000);
        }
    }
};


const mupFunction=()=>{
    mu=true;
    mup.style.backgroundColor="green";
    if(currentFloor == 1){
        floorFunction(2);
        setTimeout(()=>{
            liftReach();
        },5000);
    }
   setTimeoutFucntion();
};

const mdownFunction=()=>{
    md=true;
    mdown.style.backgroundColor="green";
    if(currentFloor==1){
        floorFunction(0);
        setTimeout(()=>{
            liftReach();
        },5000);
    }
    setTimeoutFucntion();
    
};

const setTimeoutFucntion = () => {
 
    setTimeout(() => {
      mdown.style.backgroundColor = "white";
      mup.style.backgroundColor = "white";
      mdUp = false;
      mdDown = false;
    }, 10000);
  };
  

//event listeners
down.addEventListener("click",downFunction);
up.addEventListener("click",upFunction);
mdown.addEventListener("click",mdownFunction);
mup.addEventListener("click",mupFunction);
floorFunction(0);







