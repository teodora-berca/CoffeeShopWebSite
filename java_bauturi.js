window.onload=load;
function load()
{
    /*formatul tuturor pozelor*/
    const poze=document.getElementsByClassName('produs');
    for(let i=0;i<poze.length;i++)
    {
        poze[i].style.border="5px dashed white";
    }
    /*formatul pozelor cand facem hover*/
    
    document.getElementById('poza1').onmouseover = clicked1;
    document.getElementById('poza1').onmouseout= unclicked1;
    function clicked1(event)
    {
        var x=document.getElementById('poza1');
        x.style.border="5px solid white";
    }
    function unclicked1(event)
    {
        var x=document.getElementById('poza1');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza2').onmouseover = clicked2;
    document.getElementById('poza2').onmouseout= unclicked2;
    function clicked2(event)
    {
        var x=document.getElementById('poza2');
        x.style.border="5px solid white";
    }
    function unclicked2(event)
    {
        var x=document.getElementById('poza2');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza3').onmouseover = clicked3;
    document.getElementById('poza3').onmouseout= unclicked3;
    function clicked3(event)
    {
        var x=document.getElementById('poza3');
        x.style.border="5px solid white";
    }
    function unclicked3(event)
    {
        var x=document.getElementById('poza3');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza4').onmouseover = clicked4;
    document.getElementById('poza4').onmouseout= unclicked4;
    function clicked4(event)
    {
        var x=document.getElementById('poza4');
        x.style.border="5px solid white";
    }
    function unclicked4(event)
    {
        var x=document.getElementById('poza4');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza5').onmouseover = clicked5;
    document.getElementById('poza5').onmouseout= unclicked5;
    function clicked5(event)
    {
        var x=document.getElementById('poza5');
        x.style.border="5px solid white";
    }
    function unclicked5(event)
    {
        var x=document.getElementById('poza5');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza6').onmouseover = clicked6;
    document.getElementById('poza6').onmouseout= unclicked6;
    function clicked6(event)
    {
        var x=document.getElementById('poza6');
        x.style.border="5px solid white";
    }
    function unclicked6(event)
    {
        var x=document.getElementById('poza6');
        x.style.border="5px dashed white";
    }
    
    document.getElementById('poza7').onmouseover = clicked7;
    document.getElementById('poza7').onmouseout= unclicked7;
    function clicked7(event)
    {
        var x=document.getElementById('poza7');
        x.style.border="5px solid white";
    }
    function unclicked7(event)
    {
        var x=document.getElementById('poza7');
        x.style.border="5px dashed white";
    }
    /*formatul pozelor cand le selectam*/
    /*poza1*/
    var poza1=document.getElementById('primapoza');
    poza1.addEventListener("click",afis_ingrediente1);
    var a1=0;
    function afis_ingrediente1(event)
    {
        if(a1==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Cafea Americano:cafea,apa si zahar(optional)';
        document.getElementById("poza1").appendChild(ingrediente);
        a1=1;
        }
        else
        if(a1==1)
        {
            var aux=document.getElementById("poza1");
            aux.removeChild(aux.lastElementChild);
            a1=0;
        }
    }
    /*poza2*/
    var poza2=document.getElementById('adouapoza');
    poza2.addEventListener("click",afis_ingrediente2);
    var a2=0;
    function afis_ingrediente2(event)
    {
        if(a2==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Mocha:cafea,lapte,ciocolata si zahar.';
        document.getElementById("poza2").appendChild(ingrediente);
        a2=1;
        }
        else
        if(a2==1)
        {
            var aux=document.getElementById("poza2");
            aux.removeChild(aux.lastElementChild);
            a2=0;
        }
    }
    /*poza3*/
    var poza3=document.getElementById('atreiapoza');
    poza3.addEventListener("click",afis_ingrediente3);
    var a3=0;
    function afis_ingrediente3(event)
    {
        if(a3==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Iced Coffee:cafea,gheata,zahar si lapte.';
        document.getElementById("poza3").appendChild(ingrediente);
        a3=1;
        }
        else
        if(a3==1)
        {
            var aux=document.getElementById("poza3");
            aux.removeChild(aux.lastElementChild);
            a3=0;
        }
    }

    /*poza4*/
    var poza4=document.getElementById('apatrapoza');
    poza4.addEventListener("click",afis_ingrediente4);
    var a4=0;
    function afis_ingrediente4(event)
    {
        if(a4==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Espresso:cafea si zahar(optional)';
        document.getElementById("poza4").appendChild(ingrediente);
        a4=1;
        }
        else
        if(a4==1)
        {
            var aux=document.getElementById("poza4");
            aux.removeChild(aux.lastElementChild);
            a4=0;
        }
    }

    /*poza5*/
    var poza5=document.getElementById('acinceapoza');
    poza5.addEventListener("click",afis_ingrediente5);
    var a5=0;
    function afis_ingrediente5(event)
    {
        if(a5==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Latte macchiato:cafea,lapte si zahar(optional)';
        document.getElementById("poza5").appendChild(ingrediente);
        a5=1;
        }
        else
        if(a5==1)
        {
            var aux=document.getElementById("poza5");
            aux.removeChild(aux.lastElementChild);
            a5=0;
        }
    }

    /*poza6*/
    var poza6=document.getElementById('asaseapoza');
    poza6.addEventListener("click",afis_ingrediente6);
    var a6=0;
    function afis_ingrediente6(event)
    {
        if(a6==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Cappuccino:cafea,lapte si zahar(optional)';
        document.getElementById("poza6").appendChild(ingrediente);
        a6=1;
        }
        else
        if(a6==1)
        {
            var aux=document.getElementById("poza6");
            aux.removeChild(aux.lastElementChild);
            a6=0;
        }
    }

    /*poza7*/
    var poza7=document.getElementById('asapteapoza');
    poza7.addEventListener("click",afis_ingrediente7);
    var a7=0;
    function afis_ingrediente7(event)
    {
        if(a7==0)
        {
        const ingrediente = document.createElement('div');
        ingrediente.style.gridColumnStart="2";
        ingrediente.style.gridColumnEnd="3";
        ingrediente.classList.add('format');
        ingrediente.innerHTML+='Irish coffee:cafea,whiskey si zahar(optional)';
        document.getElementById("poza7").appendChild(ingrediente);
        a7=1;
        }
        else
        if(a7==1)
        {
            var aux=document.getElementById("poza7");
            aux.removeChild(aux.lastElementChild);
            a7=0;
        }
    }

    /*likes*/
    var like=document.getElementsByTagName("button");
    like[0].onclick=apasat1;
    function apasat1()
        {
            let x=Number(localStorage.getItem("nrc1"));
            if(x)
            {
                localStorage.setItem("nrc1",x+1);
            }
            else
            {
                localStorage.setItem("nrc1", "1");
            }
        }
    document.getElementById("print1").value=localStorage.getItem("nrc1");
    like[1].onclick=apasat2;
    function apasat2()
        {
            let x=Number(localStorage.getItem("nrc2"));
            if(x)
            {
                localStorage.setItem("nrc2",x+1);
            }
            else
            {
                localStorage.setItem("nrc2", "1");
            }
        }
    document.getElementById("print2").value=localStorage.getItem("nrc2");
    like[2].onclick=apasat3;
    function apasat3()
        {
            let x=Number(localStorage.getItem("nrc3"));
            if(x)
            {
                localStorage.setItem("nrc3",x+1);
            }
            else
            {
                localStorage.setItem("nrc3", "1");
            }
        }
    document.getElementById("print3").value=localStorage.getItem("nrc3");
    like[3].onclick=apasat4;
    function apasat4()
        {
            let x=Number(localStorage.getItem("nrc4"));
            if(x)
            {
                localStorage.setItem("nrc4",x+1);
            }
            else
            {
                localStorage.setItem("nrc4", "1");
            }
        }
    document.getElementById("print4").value=localStorage.getItem("nrc4");
    like[4].onclick=apasat5;
    function apasat5()
        {
            let x=Number(localStorage.getItem("nrc5"));
            if(x)
            {
                localStorage.setItem("nrc5",x+1);
            }
            else
            {
                localStorage.setItem("nrc5", "1");
            }
        }
    document.getElementById("print5").value=localStorage.getItem("nrc5");
    like[5].onclick=apasat6;
    function apasat6()
        {
            let x=Number(localStorage.getItem("nrc6"));
            if(x)
            {
                localStorage.setItem("nrc6",x+1);
            }
            else
            {
                localStorage.setItem("nrc6", "1");
            }
        }
    document.getElementById("print6").value=localStorage.getItem("nrc6");
    like[6].onclick=apasat7;
    function apasat7()
        {
            let x=Number(localStorage.getItem("nrc7"));
            if(x)
            {
                localStorage.setItem("nrc7",x+1);
            }
            else
            {
                localStorage.setItem("nrc7", "1");
            }
        }
    document.getElementById("print7").value=localStorage.getItem("nrc7");
}