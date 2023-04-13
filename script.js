let nodeStore = [
    {
        title : 'Андрій',
        text : 'Фітак',
        name : 'title@example.com',
    },
    {
        title : 'Федір',
        text : 'Пешкін',
        name : 'hello@example.com',
    },
    {
        title : 'Глєб',
        text : 'Міхов',
        name : 'print@example.com',
    }
]

let nodeList = document.querySelector('#nodeList')

nodeStore.forEach((node) => {
    nodeList.innerHTML += `
    <div class ="note">
        <h2>${node.title} ${node.text}</h2>
        <p>Елктронна пошта ${node.name}</p>
    </div>
    `
})


let inputText = document.querySelector('#inputText')
let inputTitle = document.querySelector('#inputTitle')
let inputName = document.querySelector('#inputName')
let btnCreate = document.querySelector('#btnCreate');
const click = () => {
    nodeList.innerHTML += `
        <div class="note">
            <h2>${inputTitle.value} ${inputText.value}</h2>
            <p>Електронна пошта ${inputName.value}</p>
        </div>
    ` 
    inputTitle.value = ""
    inputText.value = ""
    inputName.value = ""
}

btnCreate.onclick = click

