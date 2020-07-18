(function (window) {
  let scrollElement;
  let homeNavLink;
  let aboutNavLink;
  let projectsNavLink;
  let introSection;
  let aboutSection;
  let projectsHeaderSection;
  let topNavHeight;

  window.addEventListener('DOMContentLoaded', function onLoad() {
    initialize();
  })

  function initialize() {
    queryElements();
    setCopyrightYear();
    trackScroll();
    configureNavigation();
    logInfo();
  }

  function queryElements() {
    scrollElement = document.scrollingElement || document.documentElement;
    homeNavLink = document.querySelector('nav ul li:nth-child(1) a');
    aboutNavLink = document.querySelector('nav ul li:nth-child(2) a');
    projectsNavLink = document.querySelector('nav ul li:nth-child(3) a');
    introSection = document.getElementById('intro');
    aboutSection = document.getElementById('about');
    projectsHeaderSection = document.getElementById('projects-header');
    topNavHeight = Number(getComputedStyle(document.documentElement).getPropertyValue('--topNavHeight').replace('px', '') || '48');
  }

  function configureNavigation() {
    function scrollToAboutSection(event) {
      event.preventDefault();
      scrollElement.scrollTo({ top: aboutSection.offsetTop - topNavHeight, behavior: 'smooth' });
    }

    homeNavLink.addEventListener('click', function onClick(event) {
      event.preventDefault();
      scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
    aboutNavLink.addEventListener('click', scrollToAboutSection);
    projectsNavLink.addEventListener('click', function onClick(event) {
      event.preventDefault();
      scrollElement.scrollTo({ top: projectsHeaderSection.offsetTop - topNavHeight, behavior: 'smooth' });
    });
    document.getElementById('arrow-down-link').addEventListener('click', scrollToAboutSection);
  }

  function trackScroll() {
    const targetElement = scrollElement instanceof HTMLHtmlElement || scrollElement instanceof HTMLBodyElement ? window : scrollElement;
    const nav = document.getElementsByTagName('nav')[0];
    targetElement.addEventListener('scroll', function onScroll() {
      const scrollTop = scrollElement.scrollTop;
      if (scrollTop < introSection.offsetTop + introSection.clientHeight - topNavHeight) {
        homeNavLink.classList.add('active');
        if (scrollElement.scrollTop < topNavHeight) {
          nav.classList.remove('nav-faded');
        } else {
          nav.classList.add('nav-faded');
        }
        nav.classList.remove('nav-solid');
      } else {
        nav.classList.add('nav-solid');
        nav.classList.remove('nav-faded');
      }
      // Set ABOUT nav link
      if (scrollTop >= aboutSection.offsetTop - topNavHeight) {
        homeNavLink.classList.remove('active');
        aboutNavLink.classList.add('active');
      } else {
        aboutNavLink.classList.remove('active');
      }
      // Set PROJECTS nav link
      if (scrollTop < projectsHeaderSection.offsetTop - topNavHeight) {
        projectsNavLink.classList.remove('active');
      } else {
        aboutNavLink.classList.remove('active');
        projectsNavLink.classList.add('active');
      }
    })
  }

  function setCopyrightYear() {
    const element = document.getElementById('copyright');
    element.innerHTML = element.innerHTML.replace('2020', new Date().getFullYear());
  }

  function logInfo() {
    console.info("I decided to create this page without using any external tools.\nI'm writing all the CSS and JS (no preprocessor) so it might be broken in older browsers.\nI wanted to experiment with plain-old JS, after all, I've been using React everyday for +4years now.")
  }

})(window);
