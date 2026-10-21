const serviceRequestForm = document.querySelector("#service-request-form");

serviceRequestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!serviceRequestForm.reportValidity()) return;

  const data = new FormData(serviceRequestForm);
  const answers = Array.from(serviceRequestForm.elements)
    .filter((field) => field.name && field.dataset.question && data.has(field.name))
    .map((field) => `${field.dataset.question}: ${data.get(field.name)}`);
  const service = serviceRequestForm.dataset.service;
  const subject = `Quotation request - ${service}`;
  const body = [
    "New service quotation request",
    "",
    ...answers,
    "",
    "Please review the project details and follow up with the client after evaluation."
  ].join("\n");
  const mailto = `mailto:tuazonk787@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.querySelector("#request-status").textContent = "Your email app should open with your completed request. Please send the email to submit it. The ElectriKarl team will review your answers before providing a quotation.";
  window.location.href = mailto;
});
