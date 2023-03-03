import {
  Button,
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import "./styles.css";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.400",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "7px",
      },
    },
  },
};


const buttonStyles = {
  sizes: {
    xl: {
        borderRadius: "18px",
    },
    
  },
}



export const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#edead0',
        200: '#CDC47A',
        300: '#766e2d',
        400: '#BEDACD',
        500: '#86BAA1',
        orange: "#f9bc60",
        background: "#3AB795",
        darkBlue: "#272343",

      },
    },

    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },

    /*   linkTheme: {
    variant: {
      custom: {
        textDecoration: "none",
      },
    },
  }, */
  components:{
    Input: {...inputSelectStyles},
    Select: {...inputSelectStyles},
    Button: {...buttonStyles},
  }
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    
    components: ["Button"],
  }),
  withDefaultVariant({
    variant: "filled",

    components: ["Input", "Select"],
  })
);
