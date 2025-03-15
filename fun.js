let row=3;
let column=3;
let turn=0;
let curr;
let old;

let imgOrder=["5","7","8","4","1","6","2","3","9"];

 window.onload=function(){
    for(let r=0;r<row;r++){
        for(let c=0;c<column;c++){
            //Create an image tag which show the parts
            let tile=document.createElement("img");
            tile.id=r.toString()+"-"+c.toString();
            tile.src=imgOrder.shift()+".png";
        //create drag and drop event listener
        tile.addEventListener("dragstart",dragstart);
        tile.addEventListener("dragover",dragover);
        tile.addEventListener("dragenter",dragenter);
        tile.addEventListener("dragleave",dragleave);
        tile.addEventListener("drop",dragdrop);
        tile.addEventListener("dragend",dragend);
            document.getElementById("part").append(tile);
        }
    }
 }
 function dragstart(){
    curr=this;
 }
 function dragover(e){
    e.preventDefault();
 }
 function dragenter(e){
    e.preventDefault();
 }
 function dragleave(){

 }
 function dragdrop(){
      old=this;
 }
 function dragend(){
    if(!old.src.includes("9.png")){
         return;
     }
    let currcoord=curr.id.split("-")
    let r=parseInt(currcoord[0]);
    let c=parseInt(currcoord[1]);

    let oldcoord=old.id.split("-");
    let r1=parseInt(oldcoord[0]);
    let c1=parseInt(oldcoord[1]);
let left=r==r1 && c1==c-1;
let right=r==r1 && c1==c+1;
let up=c==c1 && r1==r-1;
let down=c==c1 && r1==r+1;
if(left||right||up||down){
//swapping
let currtile=curr.src;
let oldtile=old.src;

curr.src=oldtile;
old.src=currtile;
 }

 turn+=1;
 document.getElementById("turns").innerText=turn;
}