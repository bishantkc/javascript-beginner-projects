class User {
    constructor(name, email) { // same like defining init(self) in python
        this.name = name
        this.email = email
    }

    viewData() {
        console.log("Name =", this.name, "and Email =", this.email)
    }
}

student1 = new User("Ram", "ram@example.com") 

export default User // export is done so that this class User can be imported in other files