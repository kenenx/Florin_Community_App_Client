
const {renderDOM } = require('./helpers')
let userproHelper = require('../assets/js/userprofile');
//const fetch = require('jest-fetch-mock');

global.fetch = require('jest-fetch-mock');

describe('user profile helpers', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('userprofileinfo', () => {
        it('makes a fetch call to get the user profile', () => {
            userproHelper.userprofileinfo(1)
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1')
        })

        it('makes a fetch call to get the users bin day', () => {
            userproHelper.loadbinCollDat(1)
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1/bin')
        })
    })
    describe('userprofileinfo', () => {
        it('makes a fetch call to get the user profile', () => {
            userproHelper.userprofileinfo(1)
            expect(fetch).toHaveBeenCalledWith('https://florin-api.onrender.com/users/profile/1')
        })
    })

})

