 let token = Math.random();

  function login(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(username != "daffaaja") {
             reject("username salah");
        } else {
          resolve({ token, username})
        }
      },500)
    })
  }

  login("daffaaja")
  .then(result => { 
    console.log(result)
    const key = apikey(result.token)
    Pic(key)
})
  .catch(err => console.log(err))

  function apikey(token) {
     const a = "apikey";
     console.log(a);
     return "a";
  }
  function Pic() {
    console.log(['1 jpg' , '2 jpg']);
  }