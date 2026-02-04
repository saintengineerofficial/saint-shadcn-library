const config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "loader-jump": "loaderJump 0.5s linear infinite",
        "loader-shadow": "loaderShadow 0.5s linear infinite",
        "loading-animation": "loadingAnimation 4s ease infinite",
        "bounce-center": "bounce-center 1s infinite",
        "more-left": "more-left 20s linear infinite",
        "more-right": "more-right 20s linear infinite",
        swingPause: "swingPause 1s ease-in-out infinite",
      },
      keyframes: {
        "bounce-center": {
          "0%, 100%": {
            transform: "translateX(-50%) translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-50%) translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "more-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "more-right": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(50%)",
          },
        },
        loaderJump: {
          "15%": {
            borderBottomRightRadius: "3px",
          },
          "25%": {
            transform: "translateY(9px) rotate(22.5deg)",
          },
          "50%": {
            transform: "translateY(18px) scale(1, 0.9) rotate(45deg)",
            borderBottomRightRadius: "40px",
          },
          "75%": {
            transform: "translateY(9px) rotate(67.5deg)",
          },
          "100%": {
            transform: "translateY(0) rotate(90deg)",
          },
        },
        loaderShadow: {
          "0%, 100%": {
            transform: "scale(1, 1)",
          },
          "50%": {
            transform: "scale(1.2, 1)",
          },
        },
        loadingAnimation: {
          "10%": {
            "-webkit-transform": "translateY(-102%)",
            transform: "translateY(-102%)",
          },
          "25%": {
            "-webkit-transform": "translateY(-100%)",
            transform: "translateY(-100%)",
          },
          "35%": {
            "-webkit-transform": "translateY(-202%)",
            transform: "translateY(-202%)",
          },
          "50%": {
            "-webkit-transform": "translateY(-200%)",
            transform: "translateY(-200%)",
          },
          "60%": {
            "-webkit-transform": "translateY(-302%)",
            transform: "translateY(-302%)",
          },
          "75%": {
            "-webkit-transform": "translateY(-300%)",
            transform: "translateY(-300%)",
          },
          "85%": {
            "-webkit-transform": "translateY(-402%)",
            transform: "translateY(-402%)",
          },
          "100%": {
            "-webkit-transform": "translateY(-400%)",
            transform: "translateY(-400%)",
          },
        },
        swingPause: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(15deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "60%": { transform: "rotate(5deg)" },
          "80%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      backgroundImage: {
        "countdown-gradient": `linear-gradient(
          to right,
          transparent 0%,
          rgba(109, 79, 255, 0.2) 10%,
          rgba(109, 79, 255, 0.8) 25%,
          rgba(109, 79, 255, 1) 50%,
          rgba(109, 79, 255, 0.8) 75%,
          rgba(109, 79, 255, 0.2) 90%,
          transparent 100%
        )`,
        "hot-stamp-gradient": "linear-gradient(90deg, #FBBE54 0%, #FBE787 19%, #FBE787 39%, #FFE79A 59%, #F7D575 73%, #F7D575 85%, #BA872D 100%)",
      },
    },
  },
  plugins: [],
};
module.exports = config;
