module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    extend:{
      fontFamily: {
        montserrat:['Montserrat']
      },
      height:{
        130:'30rem'
      }, 
      colors:{
        black:{
          primary:'#000000',
          secondary:'#1E232BCC',
          tertiary:'#15191E',
          quartenary:'#1E232B',
          senary:'#292E36',
        },
        gray:{
          primary:'#FFFFFF80',
          secondary :'#929292',
          tertiary:'#82837F',
          quartenary:'#666666',
          senary:'#EAEAEA',
          septenary:'#30363F'
        },

        red:{
          primary:'#FF0000',
          secondary:'#E74C3C'
        },
        yellow:{
          primary:'#FFB802'
        },
        navy:{
          primary:'#0E1723',
          secondary:'#1E232A'
        }
      },
    }
  }
}
