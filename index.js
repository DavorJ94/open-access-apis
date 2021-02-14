async function getAPIs() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  return data.entries;
}

// function displayAPIs(apis) {
//   apis.map(
//     (api) =>
//       (document.body.innerHTML += `
// <div class="one-api">
// <a href="${api.Link}" class="api-link-title-category">
//   <div class="api-name">${api.API}</div>
//   <div class="api-category">${api.Category}</div>
//   </a>
//   <div class="api-description">${api.Description}</div>
//   <div class="api-auth">${api.Auth}</div>
//   <div class="api-https">${
//     api.https ? "Supports HTTPS" : "Does not support HTTPS"
//   }</div>
//   <div class="api-link">${api.Link}</div>

//   </div>
// `)
//   );
// }

// getAPIs().then(displayAPIs);

getAPIs().then((api) => {
  api = api[0];
  document.body.innerHTML += `
<div class="one-api">
<a href="${api.Link}" class="api-link-title-category">
  <div class="api-name">${api.API}</div>
  <div class="api-category">${api.Category}</div>
  </a>
  <div class="api-description">${api.Description}</div>
  <div class="api-auth">${api.Auth}</div>
  <div class="api-https">${
    api.https ? "Supports HTTPS" : "Does not support HTTPS"
  }</div>
  <div class="api-link">${api.Link}</div>

  </div>
`;
});
