function getFullName(datum) {
  return datum['first name'] + ' ' + datum['last name'];
}

function getTotal(data, category, element) {
  var total = 0
  data.forEach((datum, i) => {
    var temp = category === 'user' ? getFullName(datum) : datum['expense']['category'];
    var cost = datum['expense']['cost'];
    total += temp === element ? cost : 0;
  })
  return total;
}

function resolveUndefinedElem(currentPage, currentData, datum, head) {
  if (head === "total expenses") {
    return currentPage === 'USERS' ? getTotal(currentData, "user", getFullName(datum))
    : getTotal(currentData, 'category', datum['expense']['category']);
  } 
  if (head === "full name") {
    return getFullName(datum);
  } 
  return datum['expense'][head];
}

export {getFullName};
export {getTotal};
export {resolveUndefinedElem};