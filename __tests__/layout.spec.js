
const {renderDOM } = require('./helpers')

describe('index.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./index.html')
        document = await dom.window.document
    })

    it('has a btn to login page', () => {
        const btn = document.querySelector('.login-buttons')
        expect(btn).toBeTruthy()
    })

    it('has a btn to reg page', () => {
        const btn = document.querySelector('.register-buttons')
        expect(btn).toBeTruthy()
    })

    it('has an h1 ', () => {
        const h1 = document.querySelector('h1')
        expect(h1.innerHTML).toContain('Work With Us!')
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

describe('login.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./login.html')
        document = await dom.window.document
    })

    it('has a input user name', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#username')
        expect(input).toBeTruthy()
    })

    it('has input password', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#password')
        expect(input).toBeTruthy()
    })
})

describe('mainpage.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./mainpage.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })
    it('has a recycling button', () => {
        const btn = document.querySelector('#recyclebtn')
        expect(btn).toBeTruthy()
    })
    it('has a events button', () => {
        const btn = document.querySelectorAll('#eventbtn')
        expect(btn).toBeTruthy()
    })

    it('has a complaints button', () => {
        const btn = document.querySelectorAll('#complaintsbtn')
        expect(btn).toBeTruthy()
    })
})


// need to add all pages


//recycling
describe('recycling.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./recycling.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })

    it('has a input title area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#title')
        expect(input).toBeTruthy()
    })
    it('has a input types area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#recy_type')
        expect(input).toBeTruthy()
    })
    it('has a input date area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#post_date')
        expect(input).toBeTruthy()
    })
    it('has a input content area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#info')
        expect(input).toBeTruthy()
    })
    it('has a sumbit btn', () => {
        const btn = document.querySelector('#sumbit')
        expect(btn).toBeTruthy()
    })
})
///////////////////////////////
//post for complaints
describe('post.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./post.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })
    it('has delete btn', () => {
        const btn = document.querySelector('.yes-button')
        const btn2 = document.querySelector('.no-button')
        expect(btn).toBeTruthy()
        expect(btn2).toBeTruthy()
    })
    it('has update btn', () => {
        const btn = document.querySelector('.yes2-button')
        const btn2 = document.querySelector('.no2-button')
        expect(btn).toBeTruthy()
        expect(btn2).toBeTruthy()
    })
})

/////////////////
//complaints
describe('complaints.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./complaints.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })
   
    it('has a input title area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#title')
        expect(input).toBeTruthy()
    })
    it('has a input date area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#date')
        expect(input).toBeTruthy()
    })
    it('has a input content area', () => {
        const from = document.querySelector('form')
        const input = document.querySelectorAll('#content')
        expect(input).toBeTruthy()
    })
    it('has a sumbit btn', () => {
        const btn = document.querySelector('#sumbit')
        expect(btn).toBeTruthy()
    })
})

//events
describe('events.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./events.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })
   
    it('has a info area', () => {
        const info = document.querySelectorAll('.card-body')
        expect(info).toBeTruthy()
    })

    it('has a add event btn', () => {
        const btn = document.querySelector('#event-btn')
        const btn2 = document.querySelector('#event-btn2')
        expect(btn).toBeTruthy()
        expect(btn2).toBeTruthy()
    })
})

//user profile
describe('userprofile.html',()=>{
    beforeEach(async () => {
        dom = await renderDOM('./userprofile.html')
        document = await dom.window.document
    })
    it('has a navbar', () => {
        const nav = document.querySelector('nav')
        expect(nav).toBeTruthy()
    })
    it('has a recycling button', () => {
        const btn = document.querySelector('#recyclebtn')
        expect(btn).toBeTruthy()
    })
    it('has a events button', () => {
        const btn = document.querySelectorAll('#eventbtn')
        expect(btn).toBeTruthy()
    })

    it('has a complaints button', () => {
        const btn = document.querySelectorAll('#complaintsbtn')
        expect(btn).toBeTruthy()
    })
})
