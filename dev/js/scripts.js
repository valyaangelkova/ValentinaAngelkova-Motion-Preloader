import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
//import { MotionPathHelper } from "gsap/MotionPathHelper";
gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin );

const MainTL = gsap.timeline();

//function HideShutters(){
 //   let tl=gsap.timeline();

//    tl.set ("#Ellipse1"), {alpha:0}
//.set ("#Ellipse2"), {alpha:0};
//}

//function DrawLine(){
//    let tl = gsap.timeline();
//tl.from("#VectorEnd1", {duration:0.5, alpha:0},1)
//.from("#Vector3", {duration:2, drawSVG:0},1)
//.from("#VectorEnd2", {duration:0.5, alpha:0},3)
//;
//return tl;
//}

function DrawCircles(){
    let tl = gsap.timeline();
    tl.from("#VectorEnd1", {duration:0.25, alpha:0, ease:"none"})
.from("#Vector3", {duration:2.5, drawSVG:0, ease:"none"},"label1")
.from("#VectorEnd2", {duration:0.25, alpha:0, ease:"none"},"+=0.25")

    .to("#Ellipse3", {duration:2, drawSVG:0}, "label1")
    .from ("#cirlce2", {duration:1, scale:0}, "label")
    .from("#button", {duration:2, y:-100, alpha:0, ease:"bounce.out"},"label")
;
    return tl;
}

function Shutters(){
   let tl=gsap.timeline();
   tl.to("#shutter1",{duration:1, fill:"#464846", x:"-=50", y:"-=70"})
   .to("#shutter2",{duration:1, fill:"#464846", x:725, y:586})
   ;
   return tl;
    
}


MainTL
//.add(DrawLine())
.add(DrawCircles())
.add(Shutters())
;



//function DrawLine(){
 //   let tl = gsap.timeline();
 //   tl.from("#Vector3", {duration:1, drawSVG:"0%"},"start");
 //   return tl;
//}