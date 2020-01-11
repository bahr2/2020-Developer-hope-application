let val;
val = document.all[5];
val = document.domain;
val = document.forms;



console.log(val);
localStorage.setItem('name','Bahr');
console.log(localStorage);
localStorage.setItem('age','30');
console.log(localStorage);
localStorage.removeItem('name');
localStorage.removeItem('age');
sessionStorage.setItem('name','badana','age','40');
console.log(sessionStorage);
sessionStorage.setItem('age','50');
console.log(sessionStorage);
sessionStorage.removeItem('name');
sessionStorage.removeItem('age');

document.cookie = 'name-Adam; expires=' +  new Date(9999,0,1);
toUTCString();
d








