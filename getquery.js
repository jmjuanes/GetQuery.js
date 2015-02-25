/* ************************************************************************
 *  GetQuery.js
 *  Created by Josemi Juanes [www.jmjuanes.es].
 *  Under the MIT LICENSE.
 *  
 *  For more info, visit https://github.com/jmjuanes/GetQuery.js
 *  
 */

function GetQuery()
{
	//Iniciamos el contenedor
	var get = new Array();
	
	//Cogemos la url actual
	var url = document.location.href;
	
	//Separamos y nos quedamos a partir del ?
	var string = url.split('?')[1];
	
	//Comprobamos que no este vacio
	if(typeof string != 'undefined')
	{
		//Volvemos a separar en trozos que empiezen por &
		var GET = string.split('&');
		
		//Contamos cuantos hay
		var long = GET.length;
		
		//Recorremos todos
		for(var i = 0; i < long; i++)
		{
			//Separamos el actual en las dos partes en que separa el =
			var query = GET[i].split('=');
			
			//Lo sumamos al contenedor
			get[query[0]] = unescape(decodeURI(query[1]));
		}
	}
	
	//Devolvemos
	return get;
}