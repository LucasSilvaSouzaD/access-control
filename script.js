const collaborators = [
    {name: 'Lucas Silva', id: 'l1234', autorization: false, enter: false},
    {name: 'Mateus Brilha', id: 'm1234', autorization: true, enter: false},
    {name: 'Vianei AnaHickman', id: 'v1234', autorization: true, enter: false},
    {name: 'Paulo Papa', id: 'p1234', autorization: false, enter: false},
];

let keyPressArray = [];

document.onkeypress = (event) => {
    const onEventKeyPress = event.keyCode === 13 || event.key === 'Enter' ? confirmKeyPress(keyPressArray) : keyPressArray.push(event.key);
    return onEventKeyPress;
};

const confirmKeyPress = (array) => {
    const resultKeyPress = array.join('');
    const filterCollaborator = collaborators.filter((item) => resultKeyPress === item.id);

    const authorizationCheck = !filterCollaborator[0] ? alert('Collaborator not found, contact the administrative department!') 
    : filterCollaborator[0].autorization ? responseCollaborator(filterCollaborator) 
    : alert(`${filterCollaborator[0].name} you are not allowed to enter this area`);

    console.log('update', collaborators);

    keyPressArray = [];
    return authorizationCheck;
}

// negotiation for authorized collaborator
const responseCollaborator = (collaborator) => {
    const response = collaborator[0].enter ? checkInorOut(collaborator, false) : checkInorOut(collaborator, true)
    return response
}

const checkInorOut= (collaborator, boolean) => {
    const mapColaborator = collaborator.map((col) => {
        Object.assign(col, {enter: boolean})
    })
    boolean ? alert(`Welcome ${collaborator[0].name}`) : alert(`See you later ${collaborator[0].name}`);
    return mapColaborator;
}

console.log(keyPressArray);
