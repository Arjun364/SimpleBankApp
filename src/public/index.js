document.addEventListener("DOMContentLoaded", () => {
    let noOfUser = 0
    signUp = (event) => {
        event.preventDefault();
        isNumber = isNaN(SignAcc.value)
        // number checking
        if (!isNumber) {
            // the length checking
            if (SignAcc.value.length == 4) {
                // checking if there is any user already presnt in here
                if (SignAcc.value in localStorage) {
                    alert(`There is already a user in this account number`)
                } else {
                    if (SignPass.value === SignConfirm.value) {
                        noOfUser = noOfUser + 1
                        localStorage.setItem("users", noOfUser)
                        const users = localStorage.getItem("users")
                        const userObj = {
                            username: document.getElementById("SignUsername").value,
                            accno: document.getElementById("SignAcc").value,
                            pass: document.getElementById("SignPass").value,
                            transcations: {
                                deposite: [],
                                withdraw: [],
                                balance: [],
                            }
                        }

                        const userStr = JSON.stringify(userObj)
                        localStorage.setItem(SignAcc.value, userStr)

                        alert(`The account has been created 😊`)

                        window.location = "./login.html"
                    } else {
                        alert(`Re enter the password `)
                    }
                }
            } else {
                alert(`The account number should have aleast 4 digits`)
            }
        } else {
            alert(`The account number should be number`)
        }

    }
    document.getElementById("signUpForm").addEventListener("submit", signUp);
})

document.addEventListener("DOMContentLoaded", () => {
    login = (event) => {
        event.preventDefault()
        isNumber = isNaN(loginAcc.value)
        // number checking
        if (!isNumber) {
            // length checking
            if (loginAcc.value.length == 4) {
                // checking if the there any user in local storage
                if (loginAcc.value in localStorage) {
                    alert(`User is founded`)
                    const currentuser = localStorage.getItem(loginAcc.value)
                    const user = JSON.parse(currentuser)
                    if (loginPass.value == user.pass) {
                        alert(`The user is authenticated`);
                        localStorage.setItem("currentuser", loginAcc.value)


                        window.location = "./home.html"

                    } else {
                        alert(`incorrect password`)
                    }
                } else {
                    alert(`User is not founded in the datatbase`)

                }
            } else {
                alert(`The account number should be 4 digits`)
            }
        } else {
            alert(`The value has to be a number`)
            loginAcc.value = ""
            loginPass.value =""
        }
    }


    document.getElementById("loginForm").addEventListener("submit", login)
})





