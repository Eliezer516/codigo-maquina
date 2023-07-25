const updatebar = () => {
  const bodyEl = document.body
  const barEl = document.querySelector('.bar')
  const scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight) * 100)

  barEl.style.width = `${scrollPos}%`
  requestAnimationFrame(updatebar)
}

updatebar()