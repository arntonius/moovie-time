import Vue from "vue";

export const priceFormat = (value: number) => {
  const roundedValue = Math.round(value);
  return (
    "$ " +
    roundedValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
    ".00"
  );
};

Vue.filter("priceFormat", priceFormat);
