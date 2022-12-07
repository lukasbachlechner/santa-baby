const items = [
  { title: "instagram", url: "https://instagram.com/mayamachtmusik" },
];
const result = {};
items.forEach((item) => {
  result[item.title] = {
    ...item,
  };
});

module.exports = result;
