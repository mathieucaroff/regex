function throwNullishError(name): never {
  throw new Error(`encountered nullish value for [${name}]`)
}

function init() {
  const tocPointArray = [
    ...document.getElementsByClassName("table-of-contents"),
  ] as HTMLUListElement[]
  const baseToc =
    tocPointArray.find((point) => point.childElementCount > 0) ?? throwNullishError("baseToc")

  const toc = baseToc.cloneNode(true) as HTMLUListElement

  ;[...baseToc.children].forEach((child) => baseToc.removeChild(child))

  tocPointArray.forEach((point) => {
    ;[...toc.children].forEach((entry) => {
      if (entry.firstChild?.nodeType !== document.TEXT_NODE) {
        console.warn(
          "Found toc entry whose first child is not a text node -> the entry has been skipped"
        )
        return
      }
      let entryTitle = entry.firstChild.nodeValue!.trim()

      if (entryTitle === point.dataset.unfoldContent) {
        const element = entry.cloneNode(true) as HTMLElement
        element.style.fontWeight = "bold"
        point.appendChild(element)
      } else {
        const entryCopy = document.createElement(entry.tagName)
        entryCopy.append(document.createTextNode(entryTitle))
        point.appendChild(entryCopy)
      }
    })
  })
}

export default function RevealTOC() {
  return { id: "mathieucaroff-toc", init }
}
