
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const subject = form.elements["subject"].value;
  const message = form.elements["message"].value;

  const telegramBotToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";
  const telegramMsg = `📩 New Contact Form:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📌 Subject: ${subject}\n📝 Message: ${message}`;

  fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: telegramMsg })
  })
  .then(() => {
    // Proceed to FormSubmit
    form.submit();
  })
  .catch(() => {
    alert("⚠️ Telegram failed. Sending via email only.");
    form.submit();
  });
});

