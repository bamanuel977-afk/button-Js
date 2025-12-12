function totalclick(click){
    const totalclick=document.getElementById('totalclick');
    const sumvalue=parseInt(totalclick.innerText)+click;
    console.log(sumvalue+click);
    totalclick.innerText=sumvalue;
     if(sumvalue<0){
        totalclick.innerText=0;
     }
     if(click===0){
        totalclick.innerText=0;
     }
}