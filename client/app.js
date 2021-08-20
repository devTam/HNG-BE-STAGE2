const formName = document.getElementById('form-name')
const email = document.getElementById('form-email')
const comment = document.getElementById('form-comment')
const submit = document.getElementById('submit')
const form = document.getElementById('contact-form');
const response = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = {
        name: formName.value,
        email: email.value,
        comment: comment.value
    }

    try {
        const data = await fetch("/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });

        const result = await data.json();

        response.innerText = result;

        // setTimeout(() => {
        //     submit.disabled = false;
        //     response.innerText = ""
        // }, 2000)
    
        formName.value = ""
        email.value = ""
        comment.value = ""
    } catch (error) {
        console.log(error)
    }

    


})

const printName = (name) => console.log(`My name is ${name}`);
printName('Tammy Batubo');
