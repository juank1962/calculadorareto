var display = document.getElementById("display");
var numero=0
var primerNumero=0;
var segundoNumero=0;
var presionado=0;
var salida=""
var conteo=0;
var PresionoPunto=false;
var PositivoNegativo=false;
var teclaPresionada="";
		var cero = document.getElementById("0")
		var uno = document.getElementById("1");
		var dos = document.getElementById("2");
		var tres = document.getElementById("3");
		var cuatro = document.getElementById("4");
		var cinco = document.getElementById("5");
		var seis = document.getElementById("6");
		var siete = document.getElementById("7");
		var ocho = document.getElementById("8");
		var nueve = document.getElementById("9");
		var punt = document.getElementById("punto");
		var on = document.getElementById("on");
		var sign = document.getElementById("sign");
		var raiz = document.getElementById("raiz");
		var div = document.getElementById("dividido");
		var por= document.getElementById("por");
		var menos= document.getElementById("menos");
		var mas = document.getElementById("mas");
		var igual = document.getElementById("igual");

		//Al presionar Cero

		cero.addEventListener("click",function(){
			presionado=0
			conteo++
			if(conteo>1){
				mostrar()
			}else{
				conteo=0;
			}


			//var numero=0;

			//self.numero("0")
			//alert(numero)
		})
		cero.addEventListener("mousedown",function(){
			cero.setAttribute("style","transform:scale(0.95,0.95)")
		})

		cero.addEventListener("mouseout",function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Uno

		uno.addEventListener("click",function(){
			presionado=1
			conteo++
			mostrar()
		})
		uno.addEventListener("mousedown",function(){
			uno.setAttribute("style","transform:scale(0.95,0.95)")
		})

		uno.addEventListener("mouseout",function(){
			uno.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Dos

		dos.addEventListener("click",function(){
			presionado=2
			conteo++
			mostrar()
		})
		dos.addEventListener("mousedown",function(){
			dos.setAttribute("style","transform:scale(0.95,0.95)")
		})

		dos.addEventListener("mouseout",function(){
			dos.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Tres

		tres.addEventListener("click",function(){
			presionado=3
			conteo++
			mostrar()
			efecto=tres;
		})
		tres.addEventListener("mousedown",function(){
			tres.setAttribute("style","transform:scale(0.95,0.95)")
		})

		tres.addEventListener("mouseout",function(){
			tres.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Cuatro

		cuatro.addEventListener("click",function(){
			presionado=4
			conteo++
			mostrar()
		})
		cuatro.addEventListener("mousedown",function(){
			cuatro.setAttribute("style","transform:scale(0.95,0.95)")
		})

		cuatro.addEventListener("mouseout",function(){
			cuatro.setAttribute("style","transform:scale(1,1)")
		})

//Al PResionar Cinco

		cinco.addEventListener("click",function(){
			presionado=5
			conteo++
			mostrar()
		})
		cinco.addEventListener("mousedown",function(){
			cinco.setAttribute("style","transform:scale(0.95,0.95)")
		})

		cinco.addEventListener("mouseout",function(){
			cinco.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Seis

		seis.addEventListener("click",function(){
			presionado=6
			conteo++
			mostrar()
		})
		seis.addEventListener("mousedown",function(){
			seis.setAttribute("style","transform:scale(0.95,0.95)")
		})

		seis.addEventListener("mouseout",function(){
			seis.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Siete

		siete.addEventListener("click",function(){
			presionado=7
			conteo++
			mostrar()
		})
		siete.addEventListener("mousedown",function(){
			siete.setAttribute("style","transform:scale(0.95,0.95)")
		})

		siete.addEventListener("mouseout",function(){
			siete.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Ocho

		ocho.addEventListener("click",function(){
			presionado=8
			conteo++
			mostrar()
		})
		ocho.addEventListener("mousedown",function(){
			ocho.setAttribute("style","transform:scale(0.95,0.95)")
		})

		ocho.addEventListener("mouseout",function(){
			ocho.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar nueve

		nueve.addEventListener("click",function(){
			presionado=9
			conteo++
			mostrar()
		})
		nueve.addEventListener("mousedown",function(){
			nueve.setAttribute("style","transform:scale(0.95,0.95)")
		})

		nueve.addEventListener("mouseout",function(){on
			nueve.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar On/C

		on.addEventListener("click",function(){
			presionado=""
			salida="";
			conteo=0
			display.innerHTML = "0";
			PresionoPunto=false;
			PositivoNegativo=false;
		})
		on.addEventListener("mousedown",function(){
			on.setAttribute("style","transform:scale(0.95,0.95)")
		})

		on.addEventListener("mouseout",function(){
			on.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Punto

		punt.addEventListener("click",function(){

			if(!PresionoPunto){
				console.log(conteo)
				if(conteo=0){
					presionado="0."
					conteo++
				}else{
					presionado="."
				}
				conteo++
				mostrar()
				PresionoPunto=true;
			}

		})
		punt.addEventListener("mousedown",function(){
			punt.setAttribute("style","transform:scale(0.95,0.95)")
		})

		punt.addEventListener("mouseout",function(){
			punt.setAttribute("style","transform:scale(1,1)")
		})

// Al Presionar Sumar

		mas.addEventListener("click",function(){
			teclaPresionada="+";
			presionado=""
			primerNumero=display.innerHTML;
			console.log(primerNumero);
			salida="";
			conteo=0
			PresionoPunto=false;
		})
		mas.addEventListener("mousedown",function(){
			mas.setAttribute("style","transform:scale(0.95,0.95)")
		})

		mas.addEventListener("mouseout",function(){on
			mas.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Restar

		menos.addEventListener("click",function(){
			teclaPresionada="-";
			presionado=""
			primerNumero=display.innerHTML;
			console.log(primerNumero);
			salida="";
			conteo=0
			PresionoPunto=false;
		})
		menos.addEventListener("mousedown",function(){
			menos.setAttribute("style","transform:scale(0.95,0.95)")
		})

		menos.addEventListener("mouseout",function(){on
			menos.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Multiplicar

		por.addEventListener("click",function(){
			teclaPresionada="*";
			presionado=""
			primerNumero=display.innerHTML;
			console.log(primerNumero);
			salida="";
			conteo=0
			PresionoPunto=false;
		})
		por.addEventListener("mousedown",function(){
			por.setAttribute("style","transform:scale(0.95,0.95)")
		})

		por.addEventListener("mouseout",function(){on
			por.setAttribute("style","transform:scale(1,1)")
		})

// Al Presionar Dividir

		div.addEventListener("click",function(){
			teclaPresionada="/";
			presionado=""
			primerNumero=display.innerHTML;
			console.log(primerNumero);
			salida="";
			conteo=0
			PresionoPunto=false;
		})
		div.addEventListener("mousedown",function(){
			div.setAttribute("style","transform:scale(0.95,0.95)")
		})

		div.addEventListener("mouseout",function(){on
			div.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Raiz

		raiz.addEventListener("click",function(){
			presionado=""
			primerNumero=display.innerHTML;
			resultado=Math.sqrt(primerNumero)
			Esigual()

			console.log(primerNumero);
			salida="";
			conteo=0
			PresionoPunto=false;
		})
		raiz.addEventListener("mousedown",function(){
			raiz.setAttribute("style","transform:scale(0.95,0.95)")
		})

		raiz.addEventListener("mouseout",function(){on
			raiz.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Igual

		igual.addEventListener("click",function(){
			presionado=""
			segundoNumero=display.innerHTML;
			console.log(segundoNumero);
			switch (teclaPresionada){
				case "+":
					resultado= parseFloat(primerNumero)+parseFloat(segundoNumero)
					console.log(resultado)
					Esigual()
					break
				case "-":
					resultado= parseFloat(primerNumero)-parseFloat(segundoNumero)
					console.log(resultado)
					Esigual()
					break
				case "*":
					resultado= parseFloat(primerNumero)*parseFloat(segundoNumero)
					console.log(resultado)
					Esigual()
					break
				case "/":
					resultado= parseFloat(primerNumero)/parseFloat(segundoNumero)
					console.log(resultado)
					resultado=resultado.toFixed(2)
					Esigual()
					break
				case "raizcuadrada":
					resultado=Math.sqrt(primerNumero)
					Esigual()
					break
			}

			salida="";
			conteo=0
			PresionoPunto=false;
		})
		igual.addEventListener("mousedown",function(){
			igual.setAttribute("style","transform:scale(0.95,0.95)")
		})

		igual.addEventListener("mouseout",function(){on
			igual.setAttribute("style","transform:scale(1,1)")
		})

//Al Presionar Positivo / Negativo

		sign.addEventListener("click",function(){
			if(!PositivoNegativo&&conteo<=8){
				//salida=salida.toString()+presionado.toString();
				display.innerHTML = "-"+salida;
				PositivoNegativo=true;

			}else{
				display.innerHTML = salida;
				PositivoNegativo=false;
			}
			// teclaPresionada="*";
			// presionado=""
			// primerNumero=display.innerHTML;
			// console.log(primerNumero);
			// salida="";
			// conteo=0
			// PresionoPunto=false;
		})
		sign.addEventListener("mousedown",function(){
			sign.setAttribute("style","transform:scale(0.95,0.95)")
		})

		sign.addEventListener("mouseout",function(){on
			sign.setAttribute("style","transform:scale(1,1)")
		})

/// Funciones Mostrar, Igual

function mostrar(){
	if (conteo<=8 ){

			salida=salida.toString()+presionado.toString();
			display.innerHTML = salida;


	}
}

function Esigual(){

	display.innerHTML = resultado;
}
