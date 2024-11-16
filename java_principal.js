window.onload=load;
function load()
{
    var caseta_data=document.getElementById('caseta_data');
    caseta_data.addEventListener("click",afis_data);
    var a=0;
    function afis_data(event)
    {
        event.stopPropagation();
        if(a==0)
        {
        const data = document.createElement('div');
        data.style.gridColumnStart="2";
        data.style.gridColumnEnd="3";
        data.style.gridRowStart="2";
        data.style.gridRowEnd="3";
        data.style.backgroundColor="lavender";
        data.style.color=window.getComputedStyle(document.getElementById("sarbatori")).backgroundColor;
        data.style.fontSize="4vw";
        data.style.width="40%";
        data.style.height="40%";
        const data_serbare=new Date('August 1, 2023, 12:00:00');
        const nr_zile=Math.floor(((((data_serbare-Date.now())/1000)/60)/60)/24);
        data.innerHTML+=nr_zile;
        document.getElementById("sarbatori").appendChild(data);
        a=1;
        }
        else
        if(a==1)
        {
            var aux=document.getElementById("sarbatori");
            aux.removeChild(aux.lastElementChild);
            a=0;
        }
    }
    var caseta_joc=document.getElementById('caseta_joc');
    caseta_joc.addEventListener("click",afis_info);
    function afis_info(event)
    {
        alert("Urmatorul eveniment este pe data de 1 august 2023!");
    }
    document.addEventListener('keydown',function(event)
    {
        if(event.key==='Enter')
        {
            window.location.href='despre_noi.html';
        }
    });

}