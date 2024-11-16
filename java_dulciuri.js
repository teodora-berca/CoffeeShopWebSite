window.onload=load;
function load()
{
    var elemente=document.getElementsByTagName("li");
    for(let i=0;i<elemente.length;i++)
        {
            setTimeout(function(){colorare("white",elemente[i]);},1000*(i+1));
            function colorare(culoare,ob)
            {
                ob.style.color=culoare;
            }
        }
}