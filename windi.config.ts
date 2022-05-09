import { defineConfig } from 'windicss/helpers'

// extending the builtin windicss configurations
export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        'Roboto Mono': ['Roboto Mono','monospace']
      },
    },
  },
})