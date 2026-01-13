let token = Math.random();
let pic = ['1jpg', '1jpg'];

function login(username, callback) {
  setTimeout(() => {
    if (username === 'daffa') {
      callback(null, { token, username });
    } else {
      callback("gagal login", null);
    }
  }, 1000);
}

function apikey(token, callback) {
  setTimeout(() => {
    if (!token) {
      callback("token tidak ada", null);
    } else {
      callback(null, 'apikey');
    }
  }, 500);
}

function Pic(apikey, callback) {
  if (!apikey) {
    callback("apikey tidak ada", null);
  } else {
    callback(null, pic);
  }
}

login('daffa', function(err, result) {
  if (err) return console.log(err);

  apikey(result.token, function(err, key) {
    if (err) return console.log(err);

    Pic(key, function(err, pictures) {
      if (err) return console.log(err);

      console.log("User:", result);
      console.log("API Key:", key);
      console.log("Pictures:", pictures);
    });
  });
});

