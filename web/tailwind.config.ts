import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nebula-blue": "#1f2933",
        "ion-blue": "#5dade2",
        "stellar-purple": "#635bff",
        "carbon-black": "#050709",
        "lunar-gray": "#8f9ba8",
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle at center, rgba(255,255,255,0.12) 2px, transparent 3px)",
      },
      boxShadow: {
        "glow-md":
          "0 10px 35px rgba(99, 91, 255, 0.18), inset 0 0 0 1px rgba(255,255,255,0.04)",
        "glow-sm": "0 10px 20px rgba(0, 114, 255, 0.25)",
      },
      animation: {
        "slow-pulse": "slowPulse 6s ease-in-out infinite",
        "float-lg": "float 18s ease-in-out infinite",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(5px, -12px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

