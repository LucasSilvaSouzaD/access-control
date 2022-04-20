const collaborators = [
    {name: 'colaborador 1', id: 'l1234', autorization: false, enter: false},
    {name: 'colaborador 2', id: 'm1234', autorization: true, enter: false},
    {name: 'colaborador 3', id: 'v1234', autorization: true, enter: false},
    {name: 'colaborador 4', id: 'p1234', autorization: false, enter: false},
    {name: 'colaborador 5', id: 'n1234', autorization: true, enter: false},
    {name: 'colaborador 6', id: 's1234', autorization: true, enter: false},
]

class CollaboratorAuthorization {
    static verifyCollaborator(array) {

        const resultKeyPress = array.join('');

        const filterCollaborator = collaborators.filter((item) => resultKeyPress === item.id);

        if (!filterCollaborator[0]) return 'Collaborator not found, contact the administrative department!'
        if (filterCollaborator[0].autorization) return responseCollaborator(filterCollaborator) 
       
        return `${filterCollaborator[0].name} you are not allowed to enter this area`
        
    }

    static responseCollaborator(collaborator)  {
        const response = collaborator[0].enter ? checkInorOut(collaborator, false) : checkInorOut(collaborator, true)
        return response
    }
    
    static async checkInorOut (collaborator, boolean)  {
        const mapColaborator = collaborator.map((col) => {
            Object.assign(col, {enter: boolean})
        })
        await 
        boolean ? successOrFailed('success', `Welcome ${collaborator[0].name}`) 
        : successOrFailed('success', `See you later ${collaborator[0].name}`)
        return mapColaborator;
    }
}

module.exports = CollaboratorAuthorization