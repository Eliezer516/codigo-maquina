if (location.pathname === '/search/') {
  const entrada = document.querySelector("#searchbox")
  const wrapperResults = document.querySelector("#wrapper-results")

  const getPosts = async () => {
    const response = await fetch('/static/post.json')
    const data = await response.json()
    return data
  }

  entrada.addEventListener("keyup", async (e) => {
    
    const posts = await getPosts()
    const results = fuzzysort.go(e.target.value, posts, { key: 'title' })

    wrapperResults.innerHTML = ''

    results.forEach(item => {
      const { title, date, url, imgUrl } = item.obj

      const card = templateCard(title, date, url, imgUrl)
      wrapperResults.innerHTML += card
    })

  })

  const templateCard = (title, date, url, imgUrl) => {
    return `
      <div class="rounded overflow-hidden shadow">
        <div class="flex flex-col">
          <div class="w-full px-6 py-4">
            <img class="rounded-lg" src="${imgUrl}" alt="Imagen de la noticia" width="300" height="200">
          </div>
          <div class="w-full px-6 py-4">
            <div class="font-bold text-xl mb-2"><a class="cursor-pointer" data-barba-prevent="self" href="${url}">${title}</a></div>
            <p class="text-gray-700 text-base"></p>
            <div class="mt-8 flex">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Etiqueta</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Etiqueta</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Etiqueta</span>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
