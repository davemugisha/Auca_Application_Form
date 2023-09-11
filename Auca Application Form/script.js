const name = document.getElementById('name')
const password = document.getElementById('password')
const phone = document.getElementById('phone')
const form =  document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (phone.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }
    if (phone.length >= 20){
        messages.push('Password must be less than 20 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})