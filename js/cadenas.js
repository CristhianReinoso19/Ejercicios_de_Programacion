class Cadena{
    regresar() {
        window.history.back();
    }
    vocales(){
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
    }  
    palabras(){
        let frase=document.getElementById("datos").value
        let con=1
        for(let i=0;i<frase.length;i++){
            if(frase[i]==" "){
                con=con+1
            }
        }
        let resp=document.getElementById("resp")
        resp.textContent=`La  cantidad de palabras que hay es ${con}`
    } 
    caracteres(){
        let frase=document.getElementById("datos").value
        let conPC=0
        let conC=0
        let conP=0
        let conDP=0
        let total=0
        let respuesta=""
        for(let i=0;i<frase.length;i++){
            if(frase[i]==","){
                conC=conC+1
            }
            if(frase[i]==";"){
                conPC=conPC+1
            }
            if(frase[i]==":"){
                conDP=conDP+1
            }
            if(frase[i]=="."){
                conP=conP+1
            }
        }
        total=(conC+conDP+conP+conPC)
        respuesta=total+"<br>"+";" +" "+"hay "+conPC+"<br>"+":" +" "+"hay "+conDP+"<br>"+","+" "+"hay "+conC+"<br>"+"." +" "+"hay "+conP+"<br>"
        let resp=document.getElementById("resp")
        resp.innerHTML=`La cantidad caracteres especiales en la frase son  ${respuesta}`

    }   
    fraseigual(){
        let cadena=document.getElementById("datos").value
        let cadena_minuscula=cadena.toLowerCase()
        let resp=document.getElementById("resp")
        let cadenarevez=""
        for( let i=cadena_minuscula.length-1;i>=0;i--){
            cadenarevez= cadenarevez+(cadena_minuscula[i])
            console.log(cadenarevez)
        }
        if(cadena_minuscula==cadenarevez){
            resp.textContent=`La cadena [${cadena}]  es igual al revez `
        }else{
            resp.textContent=`No es igual la cadena`
        }
    }
    fraserevez(){
        let cadena=document.getElementById("datos").value
        let resp=document.getElementById("resp")
        let cadenarevez=""
        for( let i=cadena.length-1;i>=0;i--){
            cadenarevez= cadenarevez+(cadena[i])
            console.log(cadenarevez)
        }
        resp.textContent=`La cadena [${cadena}] al revez es [${cadenarevez}]`
    }
    concatenar(){
        let cadena=document.getElementById("cadena").value
        let subcadena=document.getElementById("subcadena").value
        let resp=document.getElementById("resp")
        let nuevacadena=cadena+subcadena
        resp.textContent=`La cadena "${cadena}" y la cadena "${subcadena}" concatenada es "${nuevacadena}"`

    }
    buscar(){
        let posicion=[]
        let cadena=document.getElementById("cadena").value
        let caracter=document.getElementById("caracter").value
        let resp=document.getElementById("resp")
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]==caracter){
               posicion.push(i) 
            }
        }
        if(posicion.length==1){
            resp.textContent=`El caracter "${caracter}" esta en la posicion ${posicion}`
        }else{
            resp.textContent=`El caracter "${caracter}" esta en las posiciones ${posicion}`

        }

        
    }
    sub(){
        let cadena=document.getElementById("cadena").value
        let subcadena=document.getElementById("subcadena").value
        let resp=document.getElementById("resp")
        const posicion=cadena.indexOf(subcadena)
        if(posicion !== -1){
            resp.textContent=`La subcadena "${subcadena}" se encuentra en la posicion ${posicion} de la frase ${cadena}`

        }else{
            resp.textContent=`La subcadena "${subcadena}" no se encontró en la frase.`

        }
    }
    insertar(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             let resp = document.getElementById("resp")
             resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }  
    eliminarsub(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let resp =document.getElementById("resp")
        let posicion=0
        let aux=""
        for(let i=0;i<cadena.length;i++){
            if(subcadena[0]==cadena[i]){
                posicion=i+subcadena.length
                break
            }else{
                aux+=cadena[i]
            }
        }
        for(let c=posicion;c<cadena.length;c++){
            aux+=cadena[c]
        }
        resp.textContent=`La cadena "${cadena}" despues de eliminar la subcadena "${subcadena}" es "${aux}"`
    } 
    arrAcad(){
        let cadena = document.getElementById("cadena").value
        let resp =document.getElementById("resp")
        let arreglo=[]
        let agregar=""
        let a=0
        
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]==" "){
                arreglo.push(agregar)
                agregar=""
                console.log(agregar)
                console.log(arreglo)
            }else{
                agregar+=cadena[i]
                console.log(agregar)
            }
            a+=1
            
            
        }
        if(a>=cadena.length){
            arreglo.push(agregar)
        }
        resp.textContent=`La cadena "${cadena}" en arreglo es [${arreglo}]`

    }
    sumaArr(){
        let cadena = document.getElementById("cadena").value
        let resp =document.getElementById("resp")
        let suma=0
        let con=0
        for(let i=0;i<cadena.length;i++){
           if(!isNaN(cadena[i])){
            suma+=parseFloat(cadena[i])
           }else{
            con+=1

           } 
            
        }
        if(con==0){
            resp.textContent=`La suma de la cadena "${cadena}" es ${suma} `

        }else{
            resp.textContent=`Inserte solo numeros`
        }
       
    }


}
let cad = new Cadena()