exports.ver_html=function(json){
	     var v_idcar="";
	     var v_token="";
	     var v_marca="";
	     var v_modelo="";
         var v_anio="";
         var v_version="";
         var v_imagen="";
         var v_logo="";
         var v_precio="";
         var v_kilometraje="";
         var v_vestidura="";
         var v_direccion="";
         var v_combustible="";
         var v_traccion="";
         var v_Docu="";
         var v_Equi="";

         /*

                    if(json.idcar!=undefined && json.idcar!=null && json.idcar!=""){v_idcar=json.idcar; }
                    if(json.token!=undefined && json.token!=null && json.token!=""){v_token=json.token; }

                    //------------------------------------------
				    if(json.marca!=undefined && json.marca!=null && json.marca!=""){v_marca=json.marca; }
				 
				    if(json.modelo!=undefined && json.modelo!=null && json.modelo!=""){v_modelo=json.modelo; }
				 
				    if(json.anio!=undefined && json.anio!=null && json.anio!=""){v_anio=json.anio;}
				 
				    if(json.version!=undefined && json.version!=null && json.version!=""){v_version=json.version;}
				 
				    if(json.imagen!=undefined && json.imagen!=null && json.imagen!=""){v_imagen=json.imagen;}
				 
				    if(json.logo!=undefined && json.logo!=null && json.logo!=""){v_logo=json.logo;}

				    if(json.precio!=undefined && json.precio!=null && json.precio!=""){v_precio=json.precio}
			       
				    if(json.kilometraje!=undefined && json.kilometraje!=null && json.kilometraje!=""){
				    	//document.getElementById("txt_kilometraje").style.visibility = "hidden";
				    	v_kilometraje=json.kilometraje;
				       }else{
				       	v_kilometraje="";
				       	//document.getElementById("txt_kilometraje").style.visibility = "visible";
				       }

				 
				    if(json.VESTURE!=undefined && json.VESTURE!=null && json.VESTURE!=""){
				    	//document.getElementById("txt_vestidura").style.visibility = "hidden";
				    	v_vestidura=json.VESTURE;
				       }else{
				       	    v_vestidura="";
                            //document.getElementById("txt_vestidura").style.visibility = "visible";
				            }
				 
				    if(json.DIRECCION!=undefined && json.DIRECCION!=null && json.DIRECCION!=""){
				    	//document.getElementById("txt_direccion").style.visibility = "hidden";
				    	v_direccion=json.DIRECCION;
				       }else{
				       	v_direccion="";
				       	//document.getElementById("txt_direccion").style.visibility = "visible";
				       }
				 
				    if(json.FUEL!=undefined && json.FUEL!=null && json.FUEL!=""){
				    	//document.getElementById("txt_combustible").style.visibility = "hidden";
				    	v_combustible=json.FUEL;
				      }else{
				      	v_combustible="";
				      	//document.getElementById("txt_combustible").style.visibility = "visible";
				      }
				 
				    if(json.TRACTION!=undefined && json.TRACTION!=null && json.TRACTION!=""){
				    	//document.getElementById("txt_traccion").style.visibility = "hidden";
				    	v_traccion=json.TRACTION;
				    }else{
				    	v_traccion="";
				    //document.getElementById("txt_traccion").style.visibility = "visible";
				    }
			     

			        if(json.DOCUMENTOS!=undefined && json.DOCUMENTOS!=null && json.DOCUMENTOS!=""){v_Docu=json.DOCUMENTOS;}else{v_Docu="";}

			   
			        if(json.EQUIPAMIENTO!=undefined && json.DOCUMENTOS!=null && json.DOCUMENTOS!=""){v_Equi=json.EQUIPAMIENTO;}else{Equi="";}
*/

var html='<!DOCTYPE html>'
         +'<html lang="en">'
         +'<head>'
         +'<meta charset="utf-8">'
         +'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">'
         +'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>'
         +'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">'
         +'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>'
         +'<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>'
         +'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
         +'<meta name="viewport" content="width=device-width, initial-scale=1">'
         +'<meta name="description" content="">'
         +'<meta name="author" content="">'
         +'<link rel="shortcut icon" href="assets/ico/favicon.ico">'
         +'<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'
         +'<script src="assets/js/bootstrap.min.js"></script>'
         +'<script src="assets/js/retina-1.1.0.js"></script>'
         +'<script src="assets/js/jquery.hoverdir.js"></script>'
         +'<script src="assets/js/jquery.hoverex.min.js"></script>'
         +'<script src="assets/js/jquery.isotope.min.js"></script>'
         +'<script src="assets/js/custom.js"></script>'
         +'<script src="app.js"></script><!--CARGAMOS ANGULAR-->'
         +'<script type="text/javascript">'
         +'$( document ).ready(function() {'
         +'//alert( "ready!" );'
         +' });'
         +'</script>'
         +'<style type="text/css">'
         +'.jumbotron{'
         +'background-color:white; }'
         +'textarea {'
         +'-webkit-box-sizing: border-box;'
         +'-moz-box-sizing: border-box;'
         +'box-sizing: border-box;'
         +'width: 100%;'
         +'}'
         +'</style>'
         +'<title>SOLID - Bootstrap 3 Theme</title>'
         +'</head>'
         +'<body>'
         +'<br><br>'
         +'<div ng-controller="mainController">'
         +'<div/>'
         +'<div class="container mtb" >'
         +'<div class="row">'
         +' <div class="jumbotron"><!--PERMITE CENTRAR CONTENIDO-->'
	                +'<span style="font-weight:normal; font-size:11pt;" id="version">'+v_version+'</span> </div>'
	                +'<div class="col-md-6"  id="head_logo">'
	                +'<img src="'+v_logo+'" width="22%"></a></br></br>'
	                +' </div> </div> <div class="row"> '
	                +'<div class="col-md-6">'
	                +'<img src="'+v_imagen+'" width="60%"></a><br>'
	                +'<h3><strong>'+v_precio+' MXN</strong></h3>'
	                +'</div> <div class="col-md-6">'
	                +'Kilometraje:&nbsp;&nbsp;<strong>'+v_kilometraje+'</strong><input id="txt_kilometraje" type="text" ng-model="m_kilometraje"></br></br>'
	                +'Vestidura:&nbsp;&nbsp;<strong>'+v_vestidura+'</strong><input id="txt_vestidura" type="text" ng-model="m_vestidura"></br></br>'
	                +'Dirección:&nbsp;&nbsp;<strong>'+json.direccion+'</strong><input id="txt_direccion" type="text" ng-model="m_direccion"></br></br>'
	                +'Combustible:&nbsp;&nbsp;<strong>'+v_direccion+'</strong><input id="txt_combustible" type="text" ng-model="m_combustible"></br></br>'
	                +'Tracción:&nbsp;&nbsp;<strong>'+v_traccion+'</strong></strong><input id="txt_traccion" type="text" ng-model="m_traccion"></br></br>'
                    +'<span>'
	                +'<strong style="font-weight:bold; font-size:13pt;" >Motores</strong>  &nbsp;&nbsp; <input ng-click="blqMotores()" type="checkbox" name="vehicle" ng-model="checkboxModel.value3"> <span style="font-weight: normal">No mostrar</span>'
	                +'</br> </br>'
	                +'<div id="idMotores">'
	                +'Cilindros:&nbsp;&nbsp;<input type="text" ng-model="m_cilindros" id="idCilindros" aria-label="Readonly field"></br></br>'
	                +'Potencia:&nbsp;&nbsp;<input type="text"  ng-model="m_potencias" id="idPotencia"></input></br></br>'
	                +' Emisiones CO2:&nbsp;&nbsp;<input type="text" ng-model="m_emisiones" id="idEmisiones"></input></br>'
	                +'</div></br></div></div></br><span>'
	                +'<strong style="font-weight:bold; font-size:13pt;" >Consumo de combústible (Km/l)</strong>  &nbsp;&nbsp; <input ng-click="blqCombustible()" type="checkbox" name="vehicle" ng-model="checkboxModel.value1"> <span style="font-weight: normal">No mostrar</span>'
	                +'</span> </br></br>'
	                +'<div  ng-style="myStyle" id="idCombustible">'
	                +'Ciudad&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_ciudadW id="idCiudad"></input>&nbsp;'
	                +'Carretera&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_carretera" id="idCarretera" ></input>&nbsp;'
	                +'Mixto&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_mixto" id="idMixto"></input>'
	                +' </div> </br>'
	                +'<div><span>'
	                +'<strong style="font-weight:bold; font-size:13pt;" >Opción de financiamiento</strong>  &nbsp;&nbsp; <input  ng-click="blqFinanciamiento()" type="checkbox" name="vehicle" ng-model="checkboxModel.value2"> <span style="font-weight: normal">No mostrar</span>'
	                +'</span> </br></br>'
	                +'<div  id="idFinanciamiento">'
	                +' Enganche&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_enganche" ></input> &nbsp;&nbsp;'
	                +'Plazo&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_plazo" ></input> &nbsp;&nbsp;'
	                +'Mensualidad&nbsp;&nbsp;&nbsp;<input type="text" ng-model="m_mensualidad" ></input> &nbsp;&nbsp;'
	                +'Tasa&nbsp;&nbsp;&nbsp;<input type="text"  ng-model="m_tasa" ></input> &nbsp;&nbsp;'
	                +'</div></div></br></br><div>'
	                +'<strong style="font-weight:bold; font-size:11pt;" >DOCUMENTOS:</strong> &nbsp;&nbsp;'
	                +''+v_Docu+''
	                +'</div></br><div>'
	                +'<strong strong style="font-weight:bold; font-size:11pt;">EQUPAMIENTO:</strong> &nbsp;&nbsp;'+v_Equi+''
	                +'</div></br><div>'
	                +'<textarea rows="4" cols="50" ng-model="m_txtarea" placeholder="Describe el producto aquí..."></textarea>'
	                +'</div><input type="button"  value="Imprimir"  <input type="button" <input type="button" onClick="redireccion()"/>'
	                +'</br>'
	                +'</div>'
	                +'<div class="container" ng-controller="DocCtrl">'
	                +' <ng-pdf template-url="viewer.html"></ng-pdf>'
	                +'</div></body></html>'
	                +'<script>'
	                +'function redireccion(){ document.location.href="/sa?nombre=2";};'
	                +'</script>'
	                +'';
return html;
}; 
		
       
       
       




/*


<!--DOCTYPE html>
<html>
<head>
<style type="text/css">
	textarea {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;

	width: 100%;
}
</style>
	<title></title>
</head>
<body >
      
<div class="todoList bg-info">

	
	<div class="container-fluid">
		<div class="row">
  			<div class="col-md-10">
  				<div class="col-md-5">
  			    <center>
  			    	<h4>{{datos.data.marca}}  {{datos.data.modelo}} {{datos.data.anio}}</h4>
  			        <h5>{{datos.data.version}}</h5>
  			    </center>
	  		    </div>
	  
	  		    <div class="col-md-8">
	  			<a target="_catalog" href="{{url}}{{aux.portal}}">
				<img src="{{datos.data.imagen}}" width="50%"></a><br><br><br>
				<br><br><h3><strong>{{datos.data.precio}}  MXN</strong></h3>
  			</div>
		</div>
	</div>
	<div class="col-md-10">
	    </br></br>
		<h4>
		Kilometraje: <strong class="ng-bind: expression;">{{datos.data.kilometraje}}</strong></br></br>
		Vestidura: <strong><input type="text" id="direc" ></input>{{datos.data.VESTURE}}</strong></br></br>
		Dirección: <strong id="direc">{{datos.data.DIRECCION|| empty}}</strong></br></br>
        Combustible: <strong>{{datos.data.FUEL}}</strong></br></br>
        Tracción: <strong>{{datos.data.TRACTION}}</strong></br></br>
		</h4>
        Cilindros: <input type="text" value="4 cilindros"></input></br>
        Potencia: <input type="text"></input></br>
        Emisiones CO2: <input type="text"></input></br>

		</br>
		mostar  
		<div data-ng-controller="publicados" data-ng-init="init(%some_backend_value%)"></div>



		AQUI <button type="submit" class="btn btn-warning btn-sm" ng-click="open()">Eliminar</button>
		AQUI SLEC <select id="select_year" class="form-control" ng-model="data.modelyear" ng-options="year.categoryID as year.name for year in years | orderBy:name:true " ng-change="clickYear(datass.modelyear)" >
							</select>
		</br>
		<h4>Consumo de combústible (Km/l)</h4>
		</br>
		</br>
	</div>
</div>

<div class="container-fluid">
<h5><strong>DOCUMENTOS:</strong></h5>{{datos.data.DOCUMENTOS}}
</div>
<div class="container-fluid">
<span><h5><strong>EQUPAMIENTO:</strong></h5>{{datos.data.EQUIPAMIENTO}}</span>
</div>
</br></br></br>
<div class="container-fluid">
<textarea rows="4" cols="50" placeholder="Describe el producto aquí..."></textarea>
</div>
<div class="container-fluid">

</div>
<div class="container-fluid">

</div>
</br></br></br></br></br></br>
<span>{{datos.data}}</span>


+"</body>"
"</html-->';

return json;	
//return {"hola":"todos!!!"};
 };

 */
 