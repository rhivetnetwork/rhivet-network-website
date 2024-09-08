import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.6)",
        xl: "6px 6px 8px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities(
        {
          ".text-shadow": {
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-sm": {
            "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow-md": {
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.6)",
          },
          ".text-shadow-xl": {
            "text-shadow": "6px 6px 8px rgba(0, 0, 0, 0.7)",
          },
        },
        ["responsive", "hover"]
      );
    },
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
