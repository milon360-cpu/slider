const totalElement = document.getElementsByClassName("slider-element");
let counter = 1;
setInterval(()=>
{
    counter++;
    const currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');
    if(counter>totalElement.length)
    {
        totalElement[0].classList.add("current")
        counter = 1;
    }
    else 
    {
        currentElement.nextElementSibling.classList.add("current");
    }
   

},2000)