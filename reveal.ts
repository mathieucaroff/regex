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

// Keep the slide number of the URL synced with the navigation so that
// the current slide is maintained when a reload is triggered, be it by the
// user or by the build system.
deck.on("slidechanged", (event: any) => {
  location.hash = event.indexh
})
