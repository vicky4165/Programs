let json = JSON.stringify([
  ["Swiggy", 123],
  ["Swiggy", 227],
  ["Zomato", 103],
  ["Zomato", 171],
  ["Dunzo", 131],
  ["Zomato", 122],
  ["Swiggy", 181],
]);

let items = [];

function getSecondHighestNumber(str) {
  if (!str) return 0;
  let array = JSON.parse(str);
  if (!array || !Array.isArray(array) || array.length < 1) return 0;
  array.forEach((item) => {
    const service = item[0];
    const serviceAmount = item[1];
    let index = items.findIndex((item) => item.service == service);
    if (index >= 0) {
      items[index].amount = items[index].amount + serviceAmount;
    } else {
      items.push({ service, amount: serviceAmount });
    }
  });
  let sorted = items.sort((a, b) => b - a);
  return sorted[1].amount;
}

getSecondHighestNumber(json);
