document.body.innerHTML += `<div class="spinner-container">
                              <div class="intro-message">APIs incoming</div>
                              <div class="spinner-border spinner-border-sm text-warning" role="status">
                                <span class="sr-only hidden">Loading...</span>
                              </div>
                            </div>`;

document.body.innerHTML += `<h1 class="title hidden">LIST OF AVAILABLE APIs</h1>`;

async function getAPIs() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  document.querySelector(".spinner-container").classList.add("hidden");
  document.querySelector(".title").classList.remove("hidden");
  return data.entries;
}

function displayAPIs(apis) {
  apis.map(
    (api) =>
      (document.body.innerHTML += `
<div class="one-api">
<a href="${api.Link}" class="api-link-title-category" target="_blank">
  <div class="api-name">Name: <span>${api.API}</span></div>
  <div class="api-category">Category: ${api.Category}</div>
  </a>
  <div class="api-description">Description: ${api.Description}</div>
  <div class="api-auth">Auth: ${api.Auth ? api.Auth : "None"}</div>
  <div class="api-https">${
    api.HTTPS ? "Supports HTTPS" : "Does not support HTTPS"
  }</div>
  <div class="api-link">Link: <a href="${api.Link}" target="_blank">${
        api.Link
      }</a></div>

  </div>
`)
  );
}

getAPIs().then(displayAPIs);
