var btn = document.querySelector<HTMLButtonElement>('.btn')
var input = document.querySelector<HTMLButtonElement>('.text')

var submitFunc = ()=>
{
    var text = document.querySelector<HTMLButtonElement>('.text')

    if(text!==null)
    {
        alert(text.value)

    }

    
}


var entarPressFunc = (e:KeyboardEvent)=>
{
    var text = document.querySelector<HTMLButtonElement>('.text')

    if(text!==null)
    {
        if (e.key === "Enter") 
        {
            alert(text.value)

        }

    }

    
}

if(btn!==null)
{
    btn.addEventListener('click',submitFunc)

}


if(input!==null)
{
    input.addEventListener('keypress',entarPressFunc)

}

