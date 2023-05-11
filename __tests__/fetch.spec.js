const {renderDOM } = require('./helpers')
let userproHelper = require('../assets/js/userprofile');
//let recyHelper = require('../assets/js/recycling')
//let compHelper = require('../assets/js/post')
//let eveHelper = require('../assets/js/event')
//const fetch = require('jest-fetch-mock');

global.fetch = require('jest-fetch-mock');

describe('user profile helpers', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('userprofileinfo', () => {
        it('makes a fetch call to get the user profile', () => {
            userproHelper.userprofileinfo()
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1')
        })
    })
    describe('loadbinCollDat', () => {
        it('makes a fetch call to get the users bin day', () => {
            userproHelper.loadbinCollDat()
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1/bin')
        })
    })
    describe('loadComplaints', () => {
        it('makes a fetch call to get the users complaints', () => {
            userproHelper.loadComplaints()
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1/complaints')
        })
    })
    // ///////////////////////////////////
    // //recycling page
    // describe('loadRecPosts', () => {
    //     it('makes a fetch call to get recycling posts', () => {
    //         recyHelper.loadRecPosts()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/recycling')
    //     })
    // })
    // describe('deleteRecycling', () => {
    //     it('makes a fetch call to delete a recycling posts', () => {
    //         recyHelper.deleteRecycling()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/recycling/1')
    //     })
    // })
    //////////////////////////////////////
    //complaints
    // describe('viewComplaint', () => {
    //     it('makes a fetch call to get complaint posts', () => {
    //         compHelper.viewComplaint()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/complaints')
    //     })
    // })
    // describe('deletePost', () => {
    //     it('makes a fetch call to delete a complaint post', () => {
    //         compHelper.deletePost()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/complaints/1')
    //     })
    // })
    // describe('updateEntry', () => {
    //     it('makes a fetch edit a complaint post', () => {
    //         compHelper.updateEntry()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/complaints/1')
    //     })
    // })
    ////////////////////////////////////////////
    //event
    // describe('fetchEvents', () => {
    //     it('makes a fetch call to get events', () => {
    //         eveHelper.fetchEvents()
    //         expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/events')
    //     })
    // })
  

})

