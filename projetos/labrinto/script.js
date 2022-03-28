function photoload(){
    
    let div = document.getElementById("photos")
    for(i=1; i<=8; i++){
        let photo = document.createElement("img")
        photo.setAttribute("src", "./fotos/"+i+".jpeg")
        div.append(photo)
    }
}

photoload()