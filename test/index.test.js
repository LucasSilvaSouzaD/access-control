
const { describe , it } = require('mocha')
const assert = require('assert')
const CollaboratorAuthorization = require('../src/CollaboratorAuthorization')

describe('User authorization', () => {
    describe('Collaborator not found, contact the administrative department!', () => {
        it("['0', '1', '10', '20']", () => {
            
            
            const response = CollaboratorAuthorization.verifyCollaborator(['0', '1', '10', '20'])
            console.log(response)
            assert.equal(response, 'Collaborator not found, contact the administrative department!')
        })
    })
})