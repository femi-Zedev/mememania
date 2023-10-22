import { ButtonProps, InputBaseProps, MantineThemeOverride, Select, TableStylesParams, TabsStylesParams, TextInputStylesNames, useMantineTheme } from "@mantine/core";
import { TabsListStylesNames } from "@mantine/core/lib/Tabs/TabsList/TabsList";
import { Variants } from "framer-motion";

// @ts-ignore
function GetComponentBgColor( variant:  Variants<"outline" | "white" | "default" | "filled" | "light" | "subtle" | "gradient"> | undefined ) {
  const theme = useMantineTheme()
  switch (variant) {
    case "filled":
      return theme.colors.brand[4];
    case "light":
      return theme.colors.brand[2];


  }
}

// @ts-ignore
function GetComponentColor( variant:  Variants<"outline" | "white" | "default" | "filled" | "light" | "subtle" | "gradient"> | undefined ) {
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
          // fontSize: '16px',
          // color:  GetComponentColor({ variant: params.variant }),
          // '&:hover': {
          //   backgroundColor: theme.colors.brand[7],
          //   color: params.variant === "outline" ? theme.colors.brand[4] : "#ffffff"
          // }
        },
      })
    },
    
    Input: {
      styles: (theme, params: InputBaseProps) => ({

        input: {
          borderWidth: "1px",
          // height: () =>  { return params.h !== undefined ? params.h! : "43px"},
          fontSize: '16px',
          borderColor: theme.colors.gray[3],
          '&:focus-within': {
            borderWidth: "2px",
            borderColor: theme.colors.brand[6],
          },
        },

        icon: {
          marginLeft: "6px",
        }
      })
    },

    Select: {
      styles: (theme) => ({
        label: {
          fontSize: '14px',
          fontWeight: 500,
          color: "#525252",
          marginBottom: "4px"
        },
        item: {
          marginTop: "2px",
          marginBottom: "2px",
        }
      })
    },

    TextInput: {
      styles: (theme, params: InputBaseProps) => ({
        label: {
          fontSize: '14px',
          fontWeight: 500,
          color: "#525252",
          marginBottom: "4px"
        },
      })
    },

    Textarea: {
      styles: (theme, params: InputBaseProps) => ({
        label: {
          fontSize: '14px',
          fontWeight: 500,
          color: "#525252",
          marginBottom: "4px"
        },
      })
    },

    
    PasswordInput: {
      styles: (theme, params: TextInputStylesNames) => ({

        wrapper: {
          height: "43px",
        },
        label: {
          fontSize: '20px',
          fontWeight: 600,
          color: "#525252"
        },

        innerInput: {
          height: "100% !important",
          fontSize: '16px',
        },

        rightSection: {
          marginRight: "6px",
        }
      })
    },
    Tabs: {
      styles: (theme ) => ({

        tabsList: {
          borderBottom: "none",
        },
        tab: {
          paddingInline: "4px",
          marginInline: "6px",
          color: theme.colors.gray[5],
          '&[data-active]': {
            color: theme.colors.gray[8],
          }
        },
        tabLabel: {
          fontSize: "16px",
          fontWeight: 600,
          
        }
       
      })
    }
  }
};