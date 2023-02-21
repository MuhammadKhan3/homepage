const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      // adelia: ["ADELIA", "cursive"],
    },
    screens: {
      'mb':{'min':'350px','max':'639px'},


      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg-small': {'min': '1024px', 'max': '1100px'},

      'lg': {'min': '1100px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'lg-2': {'min': '1280px', 'max': '1379px'},

      'xl': {'min': '1380px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
    },
    fontSize:{
      //styleName: Base;
      'base': ['16px', {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '-0.025em',
        textAlign: 'right',

      }],
      'smallBold':[
        '14px',
        {
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '19px',
          letterSpacing: '0.1em',
          textAlign: 'left',

        }
      ],
      'extraLarge':[
        '43px',
        {
          fontFamily: 'Poppins',
          fontSize: '43px',
          fontWeight: '300',
          lineHeight: '37px',
          letterSpacing: '-0.025em',
          textAlign: 'left',

        }
      ],
      'menuList':[
        '30px',
        {
          fontFamily: 'Poppins',
          fontSize: '43px',
          fontWeight: '30',
          lineHeight: '37px',
          letterSpacing: '-0.025em',
          textAlign: 'left',
        }
      ],
      'small':[
        '12px',
        {
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
        }
      ],
      'cinzel-68':[
        '48px',
        {
          fontFamily:'Cinzel',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '55px',
          letterSpacing: '-0.025em',
          textAlign: 'left'
        }
      ],
      'cinzel-48':[
        '48px',
        {          
          fontFamily: 'Cinzel',
          fontSize: '48px',
          fontWeight: '400',
          lineHeight: '55px',
          letterSpacing: '-0.025em',
          textAlign: 'left'
        }
      ],
      'baseBold':[
        '16px',{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.025em',
          textAlign: 'left',
          
        }
      ],
      'medium':[
        '39px',
        {
          fontFamily: 'Poppins',
          fontSize: '39px',
          fontWeight: '400',
          lineHeight: '59px',
          letterSpacing: '-0.025em',
          textAlign: 'center',
        }
      ],
      'area':[
        '34px',
        {
          fontFamily: 'Poppins',
          fontSize: '34px',
          fontWeight: '400',
          lineHeight: '51px',
          letterSpacing: '-0.025em',
          textAlign: 'left'
        }
      ],
      'totalAmount':[
        '52px',
        {
          fontFamily: 'Poppins',
          fontSize: '52px',
          fontWeight: '400',
          lineHeight: '78px',
          letterSpacing: '-0.025em',
          textAlign: 'left',
          
        }
      ],
      'available':[
        '16px',
        {

          fontfamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '24px',
          letterSpacing: '-0.025em',
          textAlign: 'left'
        }


      ],
      'popup-heading':[
       '48px',
       {
        fontFamily: 'Poppins',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '119px',
        letterSpacing: '-0.025em',
        textAlign: 'left',
       }
       ]


    },
    extend: {
      colors: {
        primary:' #C49A50',
        box:'#F6F2EC',
        header:'#3D141A',
        floorText:'#BB9692',
        circle:"#57252C",
        cross:"#F0ECEB",
        secondary:"#F0ECEB",
        base:"#57252C",
      },
      backgroundImage: {
        'home': "url('/images/home.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}