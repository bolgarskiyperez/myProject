const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'collumns', value:[
        '111111111',
        '222222222',
        '333333333'
    ]}
]

const $site = document.querySelector(selectors:'#site')

model.forEach(block=> {
    console.log(block)
})