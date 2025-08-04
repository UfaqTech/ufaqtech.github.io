document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  // Telegram Info
  const telegramBotToken = '8151430706:AAHbS5yeMpw8H7336fUYb96e2w7QvSeh9Hs';
  const chatId = 'YOUR_CHAT_ID';
  const telegramMsg = `📩 New Message from GitHub Site:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`;

  // Send to Telegram
  fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: telegramMsg })
  }).then(() => {
    // Submit form to FormSubmit (email)
    form.submit();
  }).catch(error => {
    alert("Telegram failed, but email may still send.");
    form.submit();
  });
});
