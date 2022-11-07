var contactInputPhone = document.getElementById("input-phone")
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true
}

export var mask = IMask(contactInputPhone, maskOptions);

