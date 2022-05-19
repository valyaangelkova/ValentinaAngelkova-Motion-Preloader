import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//import { MotionPathHelper } from "gsap/MotionPathHelper";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin, CustomEase, CustomWiggle );

const MainTL = gsap.timeline();

//function HideShutters(){
 //   let tl=gsap.timeline();

//    tl.set ("#Ellipse1"), {alpha:0}
//.set ("#Ellipse2"), {alpha:0};
//}

function DrawLine(){
    let tl = gsap.timeline({delay:0.5});
tl.from("#VectorEnd1", {duration:0.25, alpha:0},"+=0.125")
.from("#Vector3", {duration:1.75, drawSVG:0},"label")
.to("#Ellipse3", {duration:1.5, drawSVG:0}, "label")
.from("#VectorEnd2", {duration:0.125, alpha:0},"+=0.0125")
;
return tl;
}

function DrawCircles(){
    let tl = gsap.timeline();
    tl
    .from ("#cirlce2", {duration:0.75, scale:0},"label1")
    .from("#button", {duration:0.75, y:-100, alpha:0, ease:"back.out"},"label1")
;
    return tl;
}

function Shutters(){
   let tl=gsap.timeline();
   tl.from("#shutter1",{duration:0.25, fill:"#464846", x:"+=100", y:"-=100", yoyo:true, repeat:3},"shutter")
   .from("#shutter2",{duration:0.25, fill:"#464846", x:"-=100", y:"+=100", yoyo:true, repeat:3},"shutter")
   ;
   return tl;
    
}
function Reverse (){

let tl=gsap.timeline();

tl
.set("#VectorEnd2", {alpha:0})

.to("#Vector3",{duration:1.75, drawSVG:-0},"label2")
.set("#VectorEnd1", {alpha:0})

.to("#Ellipse3", {duration:1.5, drawSVG:"100%"},"label2")

return tl;

}
function FadeOut(){
    let tl=gsap.timeline();
    tl.to("#cirlce2", {duration:0.75, scale:0, alpha:0}, "label3")
    .to("#button", {duration:0.75, y:100, scale:0, transformOrigin:"center", ease:"back.in", alpha:0}, "label3");
    return tl;


}


MainTL
.add(DrawLine())
.add(DrawCircles(),"-=0.5")
.add(Shutters())
.add(Reverse())
.add(FadeOut(),"-=1.75")

.repeat(-1)
;
//gsap.to("#Vector3", {duration: 2, rotation: 30, ease: "easeOut"});

//CustomWiggle.create("funWiggle", {wiggles: 10, type: "anticipate"});

//function DrawLine(){
 //   let tl = gsap.timeline();
 //   tl.from("#Vector3", {duration:1, drawSVG:"0%"},"start");
 //   return tl;
//}