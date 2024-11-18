const emailForm = document.getElementById("emailForm");
const alertMessage = document.getElementById("alertMessage");

emailForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(emailForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alertMessage.textContent = "Email sent successfully!";
            alertMessage.className = "alert success";
        } else {
            alertMessage.textContent = "Failed to send email.";
            alertMessage.className = "alert error";
        }
        alertMessage.style.display = "block";
    } catch (error) {
        alertMessage.textContent = "Error: Unable to send email.";
        alertMessage.className = "alert error";
        alertMessage.style.display = "block";
    }
});