function GetAll(){
    $.ajax({
        url: 'https://webstoreapps.azurewebsites.net/api/drone',
        type: "GET",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                $('#tbody-drone').append(
                    '<tr>'
                        +'<th id="nome'+i+'"><a class="link" href="#" onclick="Details(this)">'+data[i].nome+'</a></th>'
                        +'<td id="modelo">'+data[i].modelo+'</td>'
                        +'<td id="cor">'+data[i].cor+'</td>'
                    +'</tr>'
                )
            }
        } 
    })
}


function InsertDrone(){
    $.ajax({
        url: 'https://webstoreapps.azurewebsites.net/api/Drone',
        dataType: 'JSON',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "nome": $('#nomeDrone').val(),
            "modelo": $('#modeloDrone').val(),
            "cor": $('#corDrone').val()
        }),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            Swal.fire('Sucesso')
        }, 
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function Details(obj){
    var nomeDrone = obj.innerText;
    $.ajax({
        method: "GET",
        url: 'https://webstoreapps.azurewebsites.net/api/drone/'+nomeDrone,
        success: function(data){
            Swal.fire('Nome: '+data.nome+'\nModelo: '+data.modelo+'\nCor: '+data.cor)
        } 
    })
}