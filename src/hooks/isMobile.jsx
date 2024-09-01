import { useState, useEffect } from "react";

export default function isMobile(){
    const [Check, setCheck] = useState(true);
    const HW = 600;

    window.addEventListener('load', () =>{
        setCheck(window.innerWidth <= HW || window.innerHeight <= HW - 200);
    })
    window.addEventListener('resize', () =>{
        setCheck(window.innerWidth <= HW || window.innerHeight <= HW - 200);
    })
    return Check;
}