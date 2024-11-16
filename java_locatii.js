window.onload=load;
function load()
{
    document.addEventListener('keydown',function(event)
    {
        if(event.key==='Enter')
        {
            window.location.href='pagina_principala.html';
        }
    });
}