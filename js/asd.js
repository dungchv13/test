function ketqua(){
    let a=parseFloat(document.getElementById("a").value);
    let b=parseFloat(document.getElementById("b").value);
    let c=parseFloat(document.getElementById("c").value);

    if (a==0){
        document.getElementById("output").innerHTML="day ko phai la phuong trinh bac 2";
    }else{
        let delta=b*b-4*a*c;
        if(delta<0){
            document.getElementById("output").innerHTML="phuong trinh vo nghiem";
        }else if(delta==0){
            let x= -b/(2*a);
            document.getElementById("output").innerHTML="phuong trinh co nghiem x="+x;
        }else{
            let x1=-(b+Math.sqrt(delta))/(2*a);
            let x2=-(b-Math.sqrt(delta))/(2*a);
            document.getElementById("output").innerText="phuong trinh co 2 nghiem lan luot la:"+x1+" va "+x2;
        }
    }

}