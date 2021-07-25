export function setToken(userToken) {
    console.log(userToken)
    localStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
    return JSON.parse(localStorage.getItem('token'));
}