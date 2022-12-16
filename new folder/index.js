let menu_cards = [];

const card = document.querySelector("[card-temp]");
const card_container = document.querySelector("[card-container]");
const input_data = document.querySelector("[i-data]");

input_data.addEventListener("input", e => {
  const entry = e.target.value.toLowerCase();

  if (entry.length > 3) {
    menu_cards.forEach(ele => {
    const itHas = ele.title.toLowerCase().includes(entry);

    ele.card.classList.toggle("hide", !itHas);
  })
  }
  
});



fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    menu_cards = data.map(user => {
      const single_card = card.content.cloneNode(true).children[0].children[0];

      const title = single_card.querySelector("[card-title]");
      const text = single_card.querySelector("[card-text]");

      title.textContent = user["title"];
      text.textContent = user["body"];

      card_container.append(single_card);

      return {title: title.textContent, text: text.textContent, card: single_card};
    }
  )}
  );

  console.log(menu_cards);