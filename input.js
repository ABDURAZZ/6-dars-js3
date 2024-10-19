let div = document.getElementById('div')
async function getData() {

    let response = await fetch("https://66f68256436827ced9776af5.mockapi.io/all-data")
    let data = await response.json();

    data.map((item) => {

        console.log(item)

        let img = document.createElement('img')
        let title = document.createElement('h1')
        let type = document.createElement('h2')
        let price= document.createElement('p')
        let description = document.createElement('p')
        let color = document.createElement('h3')
        color.innerHTML = "Color" + item.color
        description.innerHTML = ' Des' + item.description
        price.innerHTML = 'Pri$' + item.price
        type.innerHTML = 'Typ' + item.type
        title.innerHTML = "Tit" +  item.title
        img.src = item.img
        

        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(type)
        div.appendChild(price)
        div.appendChild(description)
        div.appendChild(color)


    })
}


getData()
