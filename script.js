function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth',
  });
}

const links = document.querySelectorAll('.scroll');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// menu content display

const hamburgerToggler = document.querySelector('.hamburger');
const log = document.querySelector('.logo');
const navLinksContainer = document.querySelector('.nav_links');
const clo = document.querySelectorAll('.scroll');
const toggleNav = () => {
  hamburgerToggler.classList.toggle('open');
  const ariaToggle = hamburgerToggler.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  hamburgerToggler.setAttribute('aria-expanded', ariaToggle);
  navLinksContainer.classList.toggle('open');
  if (ariaToggle === 'true') {
    log.style.visibility = 'hidden';
    clo.forEach((element) => {
      element.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        hamburgerToggler.classList.remove('open');
        hamburgerToggler.setAttribute('aria-expanded', 'false');
        log.style.visibility = 'visible';
      });
    });
  } else {
    log.style.visibility = 'visible';
  }
};
hamburgerToggler.addEventListener('click', toggleNav);

// works section

const worksDesktop = [
  {
    title: 'Tonic',
    image: './images/desk_SnapshootPortfolio.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Canopy', 'Backend dev', '2015'],
  },
  {
    title: 'Multi-Post Stories',
    image: './images/desk2_SnapshootPortfolio.png',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Facebook', 'Full stack', '2015'],
  },
  {
    title: 'Facebook 360',
    image: './images/desk3_Snapshoot_Portfolio.png',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Facebook', 'Full stack', '2015'],
  },
  {
    title: 'Uber Navigation',
    image: 'images/desk4_SnapshootPortfolio.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Uber', 'Lead developer', '2018'],
  },
];

const workMobile = [
  {
    title: 'Tonic',
    image: './images/mob_Portfoli1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Canopy', 'Backend dev', '2015'],
  },
  {
    title: 'Multi-Post Stories',
    image: './images/mob_Portfolio2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Canopy', 'Backend dev', '2015'],
  },
  {
    title: 'Tonic',
    image: './images/mob_Portfolio3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Canopy', 'Backend dev', '2015'],
  },
  {
    title: 'Multi-Post Stories',
    image: './images/mob_Portfolio4.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
    tag: ['Canopy', 'Backend dev', '2015'],
  },
];

function popup(arr) {
  const pop = document.createElement('div');
  pop.className = 'popupd desk_popup';
  const deskpop = document.createElement('div');
  deskpop.className = 'desk_pop_container';
  deskpop.innerHTML = `
        <div class="top">
        <h2 id="namess">${arr.title}</h2>
        <i class="fa-solid fa-times closed" style="cursor: pointer; width: 20px;"></i>
      </div>
      <div class="type tp">
        <p class="client">${arr.tag[0]}</p>
        <img src="./images/circle.png" alt="">
        <p class="service">${arr.tag[1]}</p>
        <img src="./images/circle.png" alt="">
        <p class="service">${arr.tag[2]}</p>
      </div>
      <div class="imgs" id="imagess">
        <img src=${arr.image} alt="" class="mag">
      </div>
      <div class="deta">
        <p class="par">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum han printer took a galley
              of type and scrambled it 1960s with the releawn printer took a galley of type and
              scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        <div class="tec">
        <ul class="languages">
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
        </ul>
        <ul class="languages">
            <li>github</li>
            <li>ruby</li>
            <li>bootstrap</li>
        </ul>
        <div class="buttons">
            <button class="see-live" margin-left="10px">See Live <a href=${arr.live}><i class="fa-brands fa-github"></i></a></button>
            <button class="see-source" class="btna">See Source <a href=${arr.source}><i class="fa-brands fa-github"></i></a></button>
        </div>
        </div>
      </div>
  `;

  pop.appendChild(deskpop);
  const project = document.querySelector('.desktop-project');
  project.appendChild(pop);
  const close = deskpop.getElementsByClassName('closed')[0];
  close.addEventListener('click', () => {
    pop.classList.remove('desk_popup');
  });
}

function mpopup(arr) {
  const mpop = document.createElement('div');
  mpop.className = 'popup';
  const mobpop = document.createElement('div');
  mobpop.className = 'pop_container';
  mobpop.innerHTML = `<div class="top">
  <h2 id="names">${arr.title}</h2>
  <i class="fa-solid fa-times close popclose"></i>
</div>
<div class="type">
  <p class="client"></p>
  <img src="./images/circle.png" alt="">
  <p class="service">Back End Dev</p>
  <img src="./images/circle.png" alt="">
  <p class="service">2015</p>
</div>
<div class="imgs" id="images">
  <img src="${arr.image}" alt="" >
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
</p>
<ul class="languages">
  <li>html</li>
  <li>css</li>
  <li>javaScript</li>
</ul>
<div class="buttons">
  <button id="see" class="btna" margin-left="10px">See Live <a href="${arr.live}"><i class="fa-brands fa-edge"></i></a></button>
  <button id="source" class="btna">See Source <a href="${arr.source}"><i class="fa-brands fa-github"></i></a></button>
</div>
`;
  mpop.appendChild(mobpop);
  document.body.appendChild(mpop);

  mobpop.getElementsByClassName('close')[0].addEventListener('click', () => {
    mpop.classList.add('show');
  });
}

const mobileWork = document.querySelector('.mobile-project');
const deskWork = document.querySelector('.desktop-project');

worksDesktop.forEach((work) => {
  const item = document.createElement('div');
  item.className = 'desk-item';

  const div1 = document.createElement('img');
  div1.className = 'projet_img div1';
  div1.src = work.image;

  const div2 = document.createElement('div');
  div2.className = 'info_projet div2';
  div2.innerHTML = `
      <h2>${work.title}</h2>
      <div class="type">
          <p class="client">${work.tag[0]}</p>
          <div><img src="./images/circle.png" alt=""></div>
          <p class="service">${work.tag[1]}</p>
          <div><img src="./images/circle.png" alt=""></div>
          <p class="service">${work.tag[2]}</p>
      </div>
      <p class="description">
          ${work.description}
      </p>
      <ul class="languages">
          <li>${work.technologies[0]}</li>
          <li>${work.technologies[1]}</li>
          <li>${work.technologies[2]}</li>
      </ul>
      <button id="btn1" class="btna">See Project</button>
  `;

  const buttons = div2.getElementsByClassName('btna')[0];
  buttons.addEventListener('click', () => popup(work));

  // Randomly swap the positions of div1 and div2
  if (Math.random() < 0.5) {
    item.appendChild(div1);
    item.appendChild(div2);
  } else {
    item.appendChild(div2);
    item.appendChild(div1);
  }
  deskWork.appendChild(item);
});

workMobile.forEach((work) => {
  const item = document.createElement('div');
  item.className = 'mobile_item';
  item.innerHTML = `
            <img src = "${work.image}" alt="img1" class="imag">
            <div class="info_projet">
                <h2>${work.title}</h2>
                <div class="type">
                    <p class="client">${work.tag[0]}</p>
                  <div> <img src="./images/circle.png" alt=""></div>
                    <p class="service">${work.tag[1]}</p>
                  <div> <img src="./images/circle.png" alt=""></div>
                    <p class="service">${work.tag[2]}</p>
                </div>
                <p class="description">
                ${work.description}
                </p>
                <ul class="languages">
                    <li>${work.technologies[0]}</li>
                    <li>${work.technologies[1]}</li>
                    <li>${work.technologies[2]}</li>
                </ul>
                <button id="btn1" class="btna">See Project</button>
            </div>
          `;
  const buton = item.getElementsByClassName('btna')[0];
  buton.addEventListener('click', () => {
    mpopup(work);
  });
  mobileWork.appendChild(item);
});

// form validatio

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function setErrorFor(input, message) {
  const mess = document.createElement('div');
  mess.className = 'error';
  mess.appendChild(document.createTextNode(message));
  input.parentNode.insertBefore(mess, input.nextElementSibling);
  mess.style.position = 'absolute';

  mess.style.top = `${input.offsetTop + input.offsetHeight}px`;
  mess.style.left = `${input.offsetLeft}px`;

  console.log('error');
}

function setSuccessFor(input) {
  const m = input;
  m.style.color = 'green';
}

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === '') {
    setErrorFor(name, 'Name cannot be blank');
  } else {
    setSuccessFor(name);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (/[A-Z]/.test(emailValue)) {
    setErrorFor(email, "Please email doesn't contain Uppercase");
  } else {
    setSuccessFor(email);
  }

  if (messageValue === '') {
    setErrorFor(message, 'Message cannot be blank');
  } else {
    setSuccessFor(message);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
