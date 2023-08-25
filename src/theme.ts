import { ButtonProps, MantineThemeOverride, TextInputStylesNames, useMantineTheme } from "@mantine/core";
import { Variants } from "framer-motion";

// @ts-ignore
function getComponentBgColor( variant:  Variants<"outline" | "white" | "default" | "filled" | "light" | "subtle" | "gradient"> | undefined ) {
  const theme = useMantineTheme()
  switch (variant) {
    case "filled":
      return theme.colors.brand[4];
    case "light":
      return theme.colors.brand[2];


  }
}

// @ts-ignore
function getComponentColor( variant:  Variants<"outline" | "white" | "default" | "filled" | "light" | "subtle" | "gradient"> | undefined ) {
  const theme = useMantineTheme()
  switch (variant) {
    case "subtle":
      return theme.colors.brand[4];
    case "filled":
      return "#ffffff"; 

  }
}

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    brand: ['#e7fff9', '#c6ffef', '#92ffe5', '#4dffdd', '#4defce', '#00e8b9', '#00be99', '#00987f', '#007866', '#006255'],
  },
  primaryColor: 'brand',
  components: {

    Button: {
      // Subscribe to theme and component params
      styles: (theme, params: ButtonProps) => ({
        root: {
          fontWeight: "bolder",
          fontFamily: 'Karla',
          fontSize: '16px',
          color:  getComponentColor({ variant: params.variant }),
          '&:hover': {
            backgroundColor: theme.colors.brand[7],
            color: params.variant === "outline" ? theme.colors.brand[4] : "#ffffff"
          }
        },
      })
    },
    
    Input: {
      styles: (theme, params: TextInputStylesNames) => ({
        label: {
          fontSize: '20px',
          fontWeight: 600,
          color: "#525252"
        },

        input: {
          borderWidth: "1px",
          borderRadius: "8px",
          height: "43px",
          fontSize: '16px',
          borderColor: theme.colors.gray[3],
          '&:focus-within': {
            borderWidth: "2px",
            borderColor: theme.colors.brand[4],
          },
        },

        icon: {
          marginLeft: "6px",
        }
      })
    },
  }
};