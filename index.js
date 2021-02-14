async function getAPIs() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  return data;
}

getAPIs().then((api) => {
  let theAPIs = api.entries;
  document.body.innerHTML = `
  <div class="one-api">
  <a href="${theAPIs[0].Link}" class="api-link-title-category">
    <div class="api-name">${theAPIs[0].API}</div>
    <div class="api-category">${theAPIs[0].Category}</div>
    </a>
    <div class="api-description">${theAPIs[0].Description}</div>
    <div class="api-auth">${theAPIs[0].Auth}</div>
    <div class="api-https">${
      theAPIs[0].https ? "Supports HTTPS" : "Does not support HTTPS"
    }</div>
    <div class="api-link">${theAPIs[0].Link}</div>

    </div>
  `;
});
