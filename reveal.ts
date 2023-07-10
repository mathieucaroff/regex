import Reveal from "reveal.js"
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js"
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js"
import RevealSearch from "reveal.js/plugin/search/search.js"
import RevealNotes from "reveal.js/plugin/notes/notes.js"
import RevealZoom from "reveal.js/plugin/zoom/zoom.js"
import RevealTOC from "./revealTOC"

let deck = new Reveal({
  plugins: [
    RevealHighlight,
    RevealMarkdown,
    RevealSearch,
    RevealNotes,
    RevealZoom,
    (window as any).RevealMenu,
    RevealTOC,
  ],
  slideNumber: "h.v",
  ...{
    menu: {
      numbers: true,
      openButton: false,
      width: "30em",
    },
  },
})
deck.initialize()
