const User={
    _email: 'h@v.com',
    _password: "abx",

    get email(){
        return this._email.toUpperCase() 
    },
    set email(value){
        this._email=value.toUpperCase()
    }
}

const tea = Object.create(User)
console.log(tea.email);