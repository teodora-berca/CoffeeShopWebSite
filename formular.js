window.onload=change;
function change()
{
    const collection=document.getElementsByTagName("input");
    for(let i=0;i<collection.length;i++)
    {
    collection[i].style.backgroundColor="rgb(255,204,204)";
    collection[i].style.border="2px dashed white";
    }

    const metodePlata=["visa","mastercard","giftcard","ramburs"];
    metodePlata.forEach(optiuni);
    function optiuni(item)
    {
        let optiune=document.createElement("option"); 
        optiune.value=item; 
        optiune.text=item.toUpperCase(); 
        document.getElementById("metoda_de_plata").appendChild(optiune);
    }

    const formular=document.querySelector("#formular");
    const telefon=document.querySelector("#telefon");
    const verif=/^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;
    function testTelefon(inputTelefon)
    {
        const semafor=verif.exec(inputTelefon.value);
        if(!semafor)
        {
            alert("Nu este un numar de telefon! Incearca formatul ###-###-####")
        }
    }
    formular.addEventListener("submit",(event) => {event.preventDefault(); testTelefon(telefon);});
}