export const validateEmail = (email) => {
  if (email.length == 0) return false
  var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegx.test(email)
};

export const validatePassword = (password) => {
  if (password.length == 0) return false
  // var passwordRegex = /^[a-zA-Z0-9!@#$%^&*.,%]{8,16}$/;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.,%])[A-Za-z\d!@#$%^&*.,%]{8,}$/;
  return passwordRegex.test(password)
};

export const validateEmpty = (text) => {
  return text.trim().length !==0
}
;
export const validateNumber = (text) => {
  var numberRegex = /^[0-9]+$/
  if (text.length == 0) return false
  return numberRegex.test(text)
};


export const validateAlphabet = (text) => {
  var valid = false
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      valid = true
      console.log('sajfks', text[i])
    } else {
      valid = false
    }
  }
   return valid
};
