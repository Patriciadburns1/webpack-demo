import users from './users'; 
import $ from 'jquery'; 

export const login = (username, password) => {
    const user = users[username]; 

    if(user && user.password === password){
        return 'User logged in as:' + user.name; 
    }

    return "invalid username and or password"; 
}

//functions must be in es6 
export const addToDom = (type, text, className = 'red') => {
    const element = $(`<${type}>`, {
        text,
        class: className
    }); 
    $('#root').append(element); 
}

export const addImg =(src) => {
    const img = $('<img>', {src}); 
    $('#root').append(img); 
}