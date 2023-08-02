// update array maintaing order
const increment = (index) => {
  setTable((x) => {
    const matched = x.find((_, i) => i === index);
    return [
      ...x.slice(0, index),
      { ...matched, quantity: matched.quantity + 1 },
      ...x.slice(index + 1),
    ];
  });
};
