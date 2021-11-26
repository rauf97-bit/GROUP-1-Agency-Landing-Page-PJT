module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : theme => ({
        'header-lg' : "url(public/images/desktop/image-header.jpg)",
        'header-sm' : "url(public/images/mobile/image-header.jpg)",
        'transform-lg' : "url(public/images/desktop/image-transform.jpg)",
        'transform-sm' : "url(public/images/mobile/image-transform.jpg)",
        'standout-lg' : "url(public/images/desktop/image-stand-out.jpg)",
        'standout-sm' : "url(public/images/mobile/image-stand-out.jpg)",
        'graphic-lg' : "url(public/images/desktop/image-graphic-design.jpg)",
        'graphic-sm' : "url(public/images/mobile/image-graphic-design.jpg)",
        'photography-lg' : "url(public/images/desktop/image-photography.jpg)",
        'photography-sm' : "url(public/images/mobile/image-photography.jpg)",
        'milk-lg' : "url(public/images/desktop/image-gallery-milkbottles.jpg)",
        'milk-sm' : "url(public/images/mobile/image-gallery-milkbottles.jpg)",
        'orange-lg' : "url(public/images/desktop/image-gallery-orange.jpg)",
        'orange-sm' : "url(public/images/mobile/image-gallery-orange.jpg)",
        'cone-lg' : "url(public/images/desktop/image-gallery-cone.jpg)",
        'cone-sm' : "url(public/images/mobile/image-gallery-cone.jpg)",
        'sugar-lg' : "url(public/images/desktop/image-gallery-sugarcubes.jpg)",
        'sugar-sm' : "url(public/images/mobile/image-gallery-sugarcubes.jpg)"
      }),
      colors : {
        myblue : "hsl(198, 62%, 26%)",
        myfooter : "hsl(168, 34%, 41%)",
        softyellow : " hsl(51, 100%, 49%)",
        softred : "hsl(7, 99%, 70%)",
        graphictext : "hsl(167, 40%, 24%)",
        photographytext : "hsl(198, 62%, 26%)",
        footerbg : "hsl(168, 27%, 54%)",
        footertext: "hsl(168, 35%, 25%);",
        photographybg : "hsl(232, 10%, 55%)"
      },
      fontFamily : {
        myheader : ['Fraunces'],
        footerheader : ['Barlow']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
