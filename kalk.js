function partaisit(ievade, baze)
{

    let val = ievade.value.trim()
    if (val === "")
    {
        document.querySelectorAll("ievade").forEach(i => i.value = "")
        return
    }

    const decimalValue = parseInt(val, baze)

    if (isNaN(decimalValue))
    {
        return
    }
    
    if (ievade.id !== '10')
    {
        document.getElementById('10').value = decimalValue.toString(10)
    }
    
    if (ievade.id !== '2')
    {
        document.getElementById('2').value = decimalValue.toString(2)
    }
        
    if (ievade.id !== '16')
    {
        document.getElementById('16').value = decimalValue.toString(16).toUpperCase()
    }

    if (ievade.id !== '8')
    {
        document.getElementById('8').value = decimalValue.toString(8)
    }
     
}
