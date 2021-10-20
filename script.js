const collaborators = [
    {name: 'colaborador 1', id: 'l1234', autorization: false, enter: false},
    {name: 'colaborador 2', id: 'm1234', autorization: true, enter: false},
    {name: 'colaborador 3', id: 'v1234', autorization: true, enter: false},
    {name: 'colaborador 4', id: 'p1234', autorization: false, enter: false},
    {name: 'colaborador 5', id: 'n1234', autorization: true, enter: false},
    {name: 'colaborador 6', id: 's1234', autorization: true, enter: false},
];

let keyPressArray = [];

document.onkeypress = (event) => {
    const onEventKeyPress = event.keyCode === 13 || event.key === 'Enter' ? confirmKeyPress(keyPressArray) : keyPressArray.push(event.key);
    
    return onEventKeyPress;
};

const confirmKeyPress = (array) => {
    renderingSpinner();
    setTimeout(() => {
        const resultKeyPress = array.join('');
        const filterCollaborator = collaborators.filter((item) => resultKeyPress === item.id);
    
        const authorizationCheck = !filterCollaborator[0] ? successOrFailed('failed', 'Collaborator not found, contact the administrative department!')
        : filterCollaborator[0].autorization ? responseCollaborator(filterCollaborator) 
        : successOrFailed('failed', `${filterCollaborator[0].name} you are not allowed to enter this area`)
    
        console.log('update', collaborators);
    
        keyPressArray = [];
        return authorizationCheck;
    }, 200)
}

// negotiation for authorized collaborator
const responseCollaborator = (collaborator) => {
    const response = collaborator[0].enter ? checkInorOut(collaborator, false) : checkInorOut(collaborator, true)
    return response
}

const checkInorOut = async (collaborator, boolean) => {
    const mapColaborator = collaborator.map((col) => {
        Object.assign(col, {enter: boolean})
    })
    await 
    boolean ? successOrFailed('success', `Welcome ${collaborator[0].name}`) 
    : successOrFailed('success', `See you later ${collaborator[0].name}`)
    return mapColaborator;
}
console.log(keyPressArray);
const successOrFailed = (classe, text) => { 
    const imgI = document.querySelector('.bi-person-bounding-box');
    imgI.classList.add(classe);
    
    setTimeout(() => imgI.classList.remove(classe), 1500);
    console.log(text);
}

const renderingSpinner = () => {
    const containerSpinner = document.querySelector('.spinner-container');
    const spinner = `
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                `;
    const html = $.parseHTML(spinner);
    $(containerSpinner).append(html);
    setTimeout(() => {
        containerSpinner.innerText = '';
    }, 210)
}
