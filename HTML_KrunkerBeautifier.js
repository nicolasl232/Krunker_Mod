var active = {
    ammoIcon : true,
    inputChat : true,
    SkullIcon : true,
    Health : true,
    recticle : true,
    blood : true,
}

if(active.ammoIcon){
    document.getElementById("ammoIcon").src = "http://img4.wikia.nocookie.net/__cb20130711173219/teamfortress/images/b/b0/Ammo_icon_TF2.png";
}
if(active.inputChat){
    document.getElementById("chatInput").style.borderRadius = "10px";
}
if(active.SkullIcon){
    document.getElementById("killsIcon").src = "http://cdn.onlinewebfonts.com/svg/img_493161.svg";

}

if(active.Health){
    var HealthValue = document.getElementById("healthValue");
    HealthValue.style.padding = "9px";
    var HealthBarH = document.getElementById("healthBarH");
    HealthBarH.style.borderRadius = "10px";
    var healthBar = document.getElementById("healthBar");
    healthBarH.style.borderRadius = "10px";
}
if(active.recticle){
    document.getElementById("recticleImg").src = "http://vignette1.wikia.nocookie.net/callofduty/images/0/0e/DSR_50_Scope_Reticle_BOII.png/revision/latest?cb=20130121123958";
}
if(active.blood){
    document.getElementById("bloodDisplay").src = "https://www.pngarts.com/files/2/Blood-Red-Frame-Transparent.png";
}









