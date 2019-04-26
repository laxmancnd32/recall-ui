export const fetchJSON = (url, method, data) => {
     fetch(url, {
        method,
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      });
};