function initialize()
{
    var weightTable = document.getElementById('bigTableID');
    weightTable.style.display = "none";
}
function calculate() 
{
    const weight = document.getElementById("search").value;
    var weightTable = document.getElementById('bigTableID');
    
    const sun= (weight * 27.01);
    one=document.getElementById("sun");
    one.innerHTML=Math.round((sun + Number.EPSILON) * 100) / 100;
    const kgsun=(sun/2.2046);
    on=document.getElementById("sunkg");
    on.innerHTML=Math.round((kgsun + Number.EPSILON) * 100) / 100;
    
    const mercury=(weight * 0.38);
    two=document.getElementById("mercury");
    two.innerHTML=Math.round((mercury + Number.EPSILON) * 100) / 100;
    const kgmercury=(mercury/2.2046);
    tw=document.getElementById("mercurykg");
    tw.innerHTML=Math.round((kgmercury + Number.EPSILON) * 100) / 100;
    
    
    const venus=(weight * 0.91);
    three=document.getElementById("venus");
    three.innerHTML=Math.round((venus + Number.EPSILON) * 100) / 100;
    const kgvenus=(venus/2.2046);
    thre=document.getElementById("venuskg");
    thre.innerHTML=Math.round((kgvenus + Number.EPSILON) * 100) / 100;
    
    
    const earth=(weight * 1);
    four=document.getElementById("earth");
    four.innerHTML=Math.round((earth + Number.EPSILON) * 100) / 100;
    const kgearth=(earth/2.2046);
    fou=document.getElementById("earthkg");
    fou.innerHTML=Math.round((kgearth + Number.EPSILON) * 100) / 100;
    
    
    const moon=(weight * 0.166);
    five=document.getElementById("moon");
    five.innerHTML=Math.round((moon + Number.EPSILON) * 100) / 100;
    const kgmoon=(moon/2.2046);
    fiv=document.getElementById("moonkg");
    fiv.innerHTML=Math.round((kgmoon + Number.EPSILON) * 100) / 100;
    
    
    const mars=(weight * 0.38);
    six=document.getElementById("mars");
    six.innerHTML=Math.round((mars + Number.EPSILON) * 100) / 100;
    const kgmars=(mars/2.2046);
    si=document.getElementById("marskg");
    si.innerHTML=Math.round((kgmars + Number.EPSILON) * 100) / 100;
    
    
    const jupiter=(weight * 2.34);
    seven=document.getElementById("jupiter");
    seven.innerHTML=Math.round((jupiter + Number.EPSILON) * 100) / 100;
    const kgjupiter=(jupiter/2.2046);
    seve=document.getElementById("jupiterkg");
    seve.innerHTML=Math.round((kgjupiter+ Number.EPSILON) * 100) / 100;
    
    
    const saturn=(weight * 1.06);
    eight=document.getElementById("saturn");
    eight.innerHTML=Math.round((saturn + Number.EPSILON) * 100) / 100;
    const kgsaturn=(saturn/2.2046);
    eigh=document.getElementById("saturnkg");
    eigh.innerHTML=Math.round((kgsaturn + Number.EPSILON) * 100) / 100;
    
    
    const uranus=(weight * 0.92);
    nine=document.getElementById("uranus");
    nine.innerHTML=Math.round((uranus + Number.EPSILON) * 100) / 100;
    const kguranus=(uranus/2.2046);
    nin=document.getElementById("uranuskg");
    nin.innerHTML=Math.round((kguranus + Number.EPSILON) * 100) / 100;
    
    
    const neptune=(weight * 1.19);
    ten=document.getElementById("neptune");
    ten.innerHTML=Math.round((neptune + Number.EPSILON) * 100) / 100;
    const kgneptune=(neptune/2.2046);
    te=document.getElementById("neptunekg");
    te.innerHTML=Math.round((kgneptune + Number.EPSILON) * 100) / 100;
    
    
    const pluto=(weight * 0.06);
    eleven=document.getElementById("pluto");
    eleven.innerHTML=Math.round((pluto + Number.EPSILON) * 100) / 100;
    const kgpluto=(pluto/2.2046);
    eleve=document.getElementById("plutokg");
    eleve.innerHTML=Math.round((kgpluto + Number.EPSILON) * 100) / 100;
    
    
    weightTable.style.display = "block";
} 
