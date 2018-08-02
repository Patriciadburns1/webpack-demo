import users from './users'; 

export const login = (username, password) => {
    const user = users[username]; 

    if(user && user.password === password){
        console.log('User logged in as:', user.name)
        return; 
    }

    return console.log( "invalid username and or password"); 
}