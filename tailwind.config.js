module.exports = {
    content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",          
    "/index.html",
    "/nosotros.html",
    "/header.html",
    "/voluntariado.html",
    "/footer.html",
    "/etica.html",
    "/cuidarnos.html",
    "/cosa.html",
    "/contigo.html",
    "/casaronald.html"],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
    purge: {
        // content: [
        //   "/index.html",
        //   "/nosotros.html",
        //   "/header.html",
        //   "/voluntariado.html",
        //   "/footer.html",
        //   "/etica.html",
        //   "/cuidarnos.html",
        //   "/cosa.html",
        //   "/contigo.html",
        //   "/casaronald.html"
        // ],
      },
}
