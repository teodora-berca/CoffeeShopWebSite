window.onload=change;
function change()
{
    var x=document.getElementById('poza1');
    x.style.border="10px dashed white";
    var y=document.getElementById('poza2');
    y.style.border="10px dashed white";
    document.addEventListener('keydown',function(event)
    {
        if(event.key==='Enter')
        {
            window.location.href='contact.html';
        }
    });
    
    function culoare_random()
    {
        const culori=["#E6E6FA","#D8BFD8","#DDA0DD","#EE82EE","#DA70D6","#FF00FF"];
        const i=Math.floor(Math.random()*culori.length);
        return culori[i];
    }

    function stabilire_culoare()
    {
        var culoare=culoare_random();
        document.getElementById("link_formular").style.backgroundColor=culoare;

    }

    function culoare_buton()
    {
        const perioada=setInterval(stabilire_culoare,5000);
    }

    function dimensiune_random()
    {
        const inaltimi=["5vw","6vw"];
        const i1=Math.floor(Math.random()*inaltimi.length);
        return inaltimi[i1];
    }
    function stabilire_dimensiune()
    {
        var inaltime=dimensiune_random();
        document.getElementById("link_formular").style.height=inaltime;
        document.getElementById("link_formular").style.width=inaltime;
        document.getElementById("link_formular").style.marginTop="1em";
        document.getElementById("link_formular").style.textAlign="center";
    }
    function dimensiune_buton()
    {
        const perioada2=setInterval(stabilire_dimensiune,5000);
    }

    function pozitie_random()
    {
        const pozitii=["1em","2em","3em","4em"];
        const i3=Math.floor(Math.random()*pozitii.length);
        return pozitii[i3];
    }
    function stabilire_pozitie()
    {
        var pozitie=pozitie_random();
        document.getElementById("link_formular").style.marginLeft=pozitie;
    }
    function pozitie_buton()
    {
        const perioada3=setInterval(stabilire_pozitie,5000);
    }

    dimensiune_buton();
    culoare_buton();
    pozitie_buton();
}