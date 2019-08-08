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
    var drone = {
        "nome": $('#nomeDrone').val(),
        "modelo": $('#modeloDrone').val(),
        "cor": $('#corDrone').val()
    }

    $.ajax({
        url: "https://webstoreapps.azurewebsites.net/api/Drone",
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            data: JSON.stringify(drone) ,
            success: function(data){
                alert('cadastrou')
            } 
    })
}

function Details(obj){
    var nomeDrone = obj.innerText;
    $.ajax({
        method: "GET",
        url: 'https://webstoreapps.azurewebsites.net/api/drone/'+nomeDrone,
        success: function(data){
            alert('Nome: '+data.nome+'\nModelo: '+data.modelo+'\nCor: '+data.cor)
        } 
    })
}