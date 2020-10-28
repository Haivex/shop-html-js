function changeAvatar(event)
{ 
    var avatarimage = document.getElementById("avatarimage");
    avatarimage.src = URL.createObjectURL(event.target.files[0]);
}