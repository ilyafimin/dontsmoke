const down = document.querySelector('.down-btn')

down.addEventListener('click', (event) => {
  console.log(event.target.offsetTop + 200)
  window.scrollTo({
    top: event.target.offsetTop + 70,
    behavior: "smooth",
  })
});