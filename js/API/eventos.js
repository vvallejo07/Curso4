//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
        /*if(!usuarioExiste())
            window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				enviarRegistro(nom,mail,tel,foto);
			}else{
				navigator.notification.alert("Todos los Campos son requeridos", null, 'Registro','Aceptar');
			}
		});
		$('#regFoto').tap(function(){
			tomarFoto();
		});*/
        
        //Crear Reservas
        $('#nr1 ul[data-role=listview] li').tap(function(){
            var btn = $(this);
            if(btn.index()!=0){
                $('#nr1').attr('th',btn.index());
                btn.css('background','green');
            }
        });
        $('#resSig').tap(function(){
            if($('#nr1').attr('th')!=undefined)
                window.location.href="#nr2";
        });
        $('#resEnv').tap(function(){
            var th=$('#nr1').attr('th');
            var pr=$('#resPer').val();
            var ha=$('#resHab').val();
            var di=$('#resDia').val();
            alert(estaConectado());
            if(estaConectado())
                var a;//subir los datos
            else
                guardarReserva(th,pr,ha,di);//Guardar localmente
			guardarHistorial(th,pr,ha,di);
        });
	}, false);
	//sincronizar reservas
	document.addEventListener("online", function(){
		leerReservas();
	},false);
	
});