document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const message = document.getElementById('message').value;
        const time = document.getElementById('time').value;
        const token = document.getElementById('token').value;
        const messageId = document.getElementById('message_id').value;

        if (!message || !time || !token || !messageId) {
            event.preventDefault();
            alert('All fields are required!');
        }

        // Optional: Additional validation can be added here
    });
});