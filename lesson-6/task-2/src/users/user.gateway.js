const baseUrl = 'https://api.github.com/users/';

const getUserData = userName =>
  fetch(`${baseUrl}${userName}`).then(respons => {
    if (respons.ok) {
      return respons.json();
    }
    throw new Error();
  });

export default getUserData;
