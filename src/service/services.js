
export const fetchJSON = (url, method, data) => {
     fetch(url, {
        method,
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      });
};

export const fetchLogin = (url, form) => {
  fetch(url,  {
    method: 'POST',
    body: form
}).then(response => {
    const res = response.json();
  });
}