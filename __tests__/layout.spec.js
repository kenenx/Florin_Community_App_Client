
const {renderDOM } = require('./helpers')

describe('index.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./index.html')
        document = await dom.window.document
    })

    it('has a link to login page', () => {
        const link = document.querySelector('#login')
        expect(link).toBeTruthy()
    })

    it('has a link to reg page', () => {
        const link = document.querySelector('#register')
        expect(link).toBeTruthy()
    })

    it('has an h1 ', () => {
        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain('Commuity app')
    })

})

describe('register.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./register.html')
        document = await dom.window.document
    })

    it('has a input user name', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#username')
        expect(input).toBeTruthy()
    })

    it('has input email ', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#user_email')
        expect(input).toBeTruthy()
    })

    it('has input password', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#password')
        expect(input).toBeTruthy()
    })
})
