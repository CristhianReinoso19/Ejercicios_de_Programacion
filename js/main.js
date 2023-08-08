class Numeros{
    regresar() {
        window.history.back();
      }
    vuelto(){
        let cantidad_o=document.getElementById("cantidad").value
        cantidad_o=parseInt(cantidad_o)
        let precio=document.getElementById("precio").value
        precio=parseFloat(precio)
        let pago=document.getElementById("pago").value
        pago=parseFloat(pago)
        const iva=document.getElementById("checkbox");
        let vuelto=document.getElementById("camb")
        let valorTotal=cantidad_o*precio
        let totalIva=0
        let valorFinal=0

        if (iva.checked) {
           totalIva=valorTotal+valorTotal*0.12
        }else{
            totalIva=valorTotal
        }
        
        if(totalIva==pago){
            console.log("pago exacto")
            vuelto.textContent=`Pago exacto`
        }else{
            if(totalIva>pago){
                valorFinal=totalIva-pago
                    valorFinal=valorFinal.toFixed(2)
                console.log("Pago insuficiente")
                vuelto.textContent=`Pago incompleto, faltan ${valorFinal}`
            }else{
                if(totalIva<pago){
                    valorFinal=pago-totalIva
                    valorFinal=valorFinal.toFixed(2)
                    vuelto.textContent=`Su vuelto es ${valorFinal}`
                    console.log("Su vuelto es",valorFinal)
                }
            }
        }
        


    }
   
    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }

    }
    divisores(){
        let num=document.getElementById("num1").value
        let divisores=""
        
      
        for(let i=1;i<=num;i++){
            if(num%i==0){
                divisores= divisores+" "+i+"<br>";
            }
           
        }
        document.getElementById("divi").innerHTML=divisores


    }
    sumadivisores(){
        let  suma=0
        let i=1;
        let num2=document.getElementById("num2").value
        let sum=document.getElementById("sum")
        while(i<=num2){
            if(num2%i==0){
                suma=suma+i
            }
            i=i+1


        }
        sum.textContent=`La suma de los divisores de ${num2} es ${suma}`

    }
    cantidad_div(){
        let cantidad=0
        let i=1;
        let num3=document.getElementById("num3").value
        let can=document.getElementById("can")
        while(i<=num3){
            if(num3%i==0){
                cantidad=cantidad+1
            }
            i=i+1


        }
        can.textContent=`La cantidad de divisores de ${num3} son ${cantidad}`

    }
    perfecto(){
        let  suma=0
        let i=1;
        let num4=document.getElementById("num4").value
        let per=document.getElementById("per")
        while(i<num4){
            if(num4%i==0){
                suma=suma+i
            }
            i=i+1


        }
        if(suma==num4){
            per.textContent=`El numero ${num4} es un numero perfecto`
        }else{
            per.textContent=`El numero ${num4} no es un numero perfecto`
        }
       


    }
    amigos(){
        let num5=document.getElementById("num5").value
        num5=parseInt(num5)
        let num6=document.getElementById("num6").value
        num6=parseInt(num6)
        let m=1
        let sumaM=0
        let sumaN=0
        let n=1
        let amg=document.getElementById("amg")
        while(m<num5){
            if(num5%m==0){
                sumaM=sumaM+m
            }
            m=m+1
    
    
        }
        while(n<num6){
            if(num6%n==0){
                sumaN=sumaN+n
            }
            n=n+1
    
    
        }
        if(sumaM==num6 && sumaN==num5){
            amg.textContent=`Los numeros ${num5} y ${num6} son amigos`
            
        }else{
           
            amg.textContent=`Los numeros ${num5} y ${num6} no son amigos`
        }
        


    }
    primo(){
        let num7=document.getElementById("num7").value
        let cantidad2=0
        let i=1
        let pri=document.getElementById("pri")
        while(i<=num7){
            if(num7%i==0){
                cantidad2=cantidad2+1
            }
            i=i+1


        }
        if(cantidad2==2){
            pri.textContent=`El numero ${num7} es primo`

        }else{
            pri.textContent=`EL numero ${num7} no es primo`
        }

    }
    primosgemelos(){
        let num8=document.getElementById("num8").value
        let num9=document.getElementById("num9").value
        let pg=document.getElementById("pg")
        let p=num8
        let q=num9
        let cant=0
        let cant2=0
        let j=1
        let h=1

        while(j<=p){
            if(p%j==0){
                cant=cant+1
            }
            j=j+1


        }
        while(h<=q){
            if(q%h==0){
                cant2=cant2+1
            }
            h=h+1


        }
        if(cant==cant2){
            pg.textContent=`Los numero ${p} y ${q} son primos gemelos`
        }else{
            pg.textContent=`Los numeros ${p} y ${q} no son primos`
        }
        

    }
    invertirnumero(){
        let num10=document.getElementById("num10").value
        let inv=document.getElementById("inv")
        let r=0
        let invertir=""
        while(num10>0){
            r= num10%10
            invertir=invertir+r.toString()
            num10=parseInt(num10/10)

        }
        inv.textContent=invertir

    }
    cantidadDigitos(){
        let num11=document.getElementById("num11").value
        let dig=document.getElementById("dig")
        let con=0
        while(num11>0){
            num11=parseInt(num11/10)
            con=con+1

        }
        dig.textContent=`La cantidad de digitios son ${con}`
    
    }
    factorial(){
        let num12=document.getElementById("num12").value
        num12=parseFloat(num12)
        let fac=document.getElementById("fac")
        let l=1
        let com=0
        let factorial=1
        if(num12>com){
            while(l<=num12){
                factorial=factorial*l
                l=l+1
            }
            fac.textContent=`La  factorial de ${num12} es ${factorial}`

        }else{
            fac.textContent=`Solo numero positivos`
           
        }
       
        
    }
    exponente(){
        let num13=document.getElementById("num13").value
        num13=parseInt(num13)
        let num14=document.getElementById("num14").value
        num14=parseInt(num14)
        let exp=document.getElementById("exp")
        let expo=1
        let i=1
        while(i<=num14){
            expo=expo*num13
            i=i+1
        }
        
        exp.textContent=`El resultado del numero ${num13} con el exponente ${num14} es ${expo}`

    }
    tabla(){
        let num15=document.getElementById("num15").value
        num15=parseInt(num15)
        
        let resultado=[]
        let multipicacion=0
        for(let i=1;i<=12;i++){
            multipicacion=num15*i;
            resultado+=num15.toString()+"x"+i.toString()+"="+multipicacion.toString()+"<br>";
        } 
        document.getElementById("tab").innerHTML=resultado

    
      
    }
    fibonaci(){
        let num17=document.getElementById("num17").value
        let fibonacci=""
        let a=0
        let b=1
        let c=0
        let i=1
        let fib=document.getElementById("fib")
        while(i<num17){
            c=a+b
            if(fibonacci==""){
                fibonacci=a+","+b

            }else{
                fibonacci=fibonacci+","+c
                a=b
                b=c
                

            }
            i=i+1  
             
        }
        fib.textContent=fibonacci
    }
 
}
const numero = new Numeros();
