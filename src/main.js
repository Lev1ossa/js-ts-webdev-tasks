function Block(blockClass) {
  const block = document.createElement('div');
  block.classList.add(blockClass);

  return block;
}

function Heading(tag, dataObj) {
  const heading = document.createElement(tag);
  heading.innerHTML = dataObj.text;
  heading.classList.add(...dataObj.classList);

  return heading;
}

function Button(dataObj) {
  const button = document.createElement('button');
  button.textContent = dataObj.text;
  button.classList.add('button');
  if (dataObj.border) {
    button.style.border = dataObj.border;
  }
  if (dataObj.background) {
    button.style.background = dataObj.background;
  }
  if (dataObj.color) {
    button.style.color = dataObj.color;
  }

  return button;
}

function Card(cardItem) {
  const card = Block('card');
  card.classList.add(cardItem.class);
  card.style.background = cardItem.background;

  const cardInfo = Block('card-info');
  const title = Heading('h2', cardItem.title);
  const subtitle = Heading('h3', cardItem.subtitle);
  cardInfo.append(title, subtitle);

  const button = Button(cardItem.button);

  card.append(cardInfo, button);

  return card;
}

function ShowCase (pageData) {
  const { header: headerData, cards: cardsData } = pageData;
  const showCase = Block('showcase');

  const header = Block('header');
  const h1 = Heading('h1', headerData.title);
  const headerButton = Button(headerData.button);
  header.append(h1, headerButton);

  const cards = Block('cards');
  cardsData.forEach((cardItem) => {
    const card = Card(cardItem);
    cards.append(card);
  })

  showCase.append(header, cards);

  return showCase;
}

const createPage = () => {
  const pageData = {
    header: {
      title: {
        text: 'Last works',
        classList: ['header-title']
      },
      button: {
        text: 'Explore Showcase',
        border: '2px solid #EBEAED',
        background: '#FFFFFF'
      }
    },
    cards: [
      {
        title: {
          text: 'Startup Framework',
          classList: ['card-title']
        },
        subtitle: {
          text: 'Startup is a powerful tool for quick and convenient proto&#8288;-&#8288;typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
          classList: ['card-subtitle']
        },
        button: {
          text: 'Explore',
          background: '#FFFFFF'
        },
        background: '#EBEAED',
        class: 'card1'
      },
      {
        title: {
          text: 'Web Generator',
          classList: ['card-title']
        },
        subtitle: {
          text: 'Startup is a powerful tool for quick and convenient proto&#8288;-&#8288;typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
          classList: ['card-subtitle']
        },
        button: {
          text: 'Explore',
          background: '#25DAC5',
          color: '#FFFFFF'
        },
        background: '#FFFFFF',
        class: 'card2'
      },
      {
        title: {
          text: 'Slides 4',
          classList: ['card-title']
        },
        subtitle: {
          text: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
          classList: ['card-subtitle']
        },
        button: {
          text: 'Explore',
          background: '#FFFFFF'
        },
        background: '#482BE7',
        class: 'card3'
      },
      {
        title: {
          text: 'Postcards',
          classList: ['card-title']
        },
        subtitle: {
          text: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
          classList: ['card-subtitle']
        },
        button: {
          text: 'Explore',
          background: '#FFFFFF'
        },
        background: 'center / cover no-repeat url(./assets/img/card4-bg.jpg)',
        class: 'card4'
      }
    ]
  }
  const pageWrapper = Block('page-wrapper');
  const showCase = ShowCase(pageData);
  pageWrapper.append(showCase);
  document.body.append(pageWrapper);
}

createPage();