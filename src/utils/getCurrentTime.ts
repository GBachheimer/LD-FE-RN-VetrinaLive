export const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  let hours = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
  let min = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
  return date + '/' + month + '/' + year + ' ' + hours + ':' + min;
};
