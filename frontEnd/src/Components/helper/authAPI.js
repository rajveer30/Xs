export const signin = (user) => {
  return fetch(`http://localhost:8001/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signup = (user) => {
  return fetch(`http://localhost:8001/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const contactAPI = (query) => {
  return fetch(`http://localhost:8001/api/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(query),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
