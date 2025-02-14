function submitForm(event) {
    event.preventDefault(); 
    alert("Your message has been submitted successfully!");
    document.querySelector("form").reset(); 
}