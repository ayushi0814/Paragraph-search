const text = [
  // `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Dabeli, or the vada pav of Gujarat, is a popular street food from the Kutch. It is a well-known local food of Gujarat. It is made by stuffing a soft pav (bread roll) with a spicy potato filling, sweet and tangy chutneys, roasted peanuts, and crunchy sev`,

  `There is not one but many famous dishes in South India including Pongal, Masala dosa, Sambar, Pulihora, Appam, Upma, Hyderabadi biryani and many more.`,
  ` Popular snacks include gol gappa (known as panipuri in other places). It consists of a round, hollow puri, fried crisp and filled with a mixture of flavoured water, boiled and cubed potatoes, bengal gram beans, etc.`,
  `Mumbai's most famous street food includes Vada Pav, bhelpuri, panipuri, sevpuri, Bombay sandwich, ragda-pattice, pav bhaji, omlette pav and kebabs. Among the popular desserts of Mumbai are Kulfi and Ice Gola.`,
  `Chole Bhature also known as Chana Bhatura is one of the most popular Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread. Chola Bhatura always make for a delicious and filling meal.`,
  `A Gujarati thali typically comprises of one or two steamed or fried snacks called farsans, a green vegetable, a tuber or a gourd shaak`,
  ` Batti is hard, unleavened bread cooked in most of areas of Rajasthan, and in some parts of Madhya Pradesh, and Gujarat states of India.`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
