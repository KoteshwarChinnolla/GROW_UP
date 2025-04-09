import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(0)'
          },
          '50%': { 
            transform: 'translateY(-10px)'
          }
        },
        'count-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'rise': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0)'
          },
          '50%': { 
            transform: 'translateY(-15px)'
          }
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '1'
          },
          '50%': { 
            opacity: '0.7'
          }
        },
        'rotate-slow': {
          '0%': { 
            transform: 'rotate(0deg)'
          },
          '100%': { 
            transform: 'rotate(360deg)'
          }
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'wiggle': {
          '0%, 100%': { 
            transform: 'rotate(-3deg)'
          },
          '50%': { 
            transform: 'rotate(3deg)'
          }
        },
        'shimmer': {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          }
        },
        'flow': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.98)'
          },
          '20%': { 
            opacity: '0.2',
            transform: 'translateY(15px) scale(0.99)'
          },
          '40%': { 
            opacity: '0.4',
            transform: 'translateY(10px) scale(0.995)'
          },
          '60%': { 
            opacity: '0.6',
            transform: 'translateY(5px) scale(0.998)'
          },
          '80%': { 
            opacity: '0.8',
            transform: 'translateY(2px) scale(0.999)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        'rise-on-scroll': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'water-flow': {
          '0%': { 
            backgroundPosition: '0% 50%'
          },
          '50%': { 
            backgroundPosition: '100% 50%'
          },
          '100%': { 
            backgroundPosition: '0% 50%'
          }
        },
        'wave': {
          '0%': { 
            transform: 'translateX(0)'
          },
          '50%': { 
            transform: 'translateX(-25%)'
          },
          '100%': { 
            transform: 'translateX(-50%)'
          }
        },
        'wave-slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'wave-motion': {
          '0%': { transform: 'translateY(0) scaleY(1)' },
          '25%': { transform: 'translateY(-5px) scaleY(1.05)' },
          '50%': { transform: 'translateY(0) scaleY(1)' },
          '75%': { transform: 'translateY(5px) scaleY(0.95)' },
          '100%': { transform: 'translateY(0) scaleY(1)' },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-down': 'slide-in-down 0.3s ease-out',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'count-up': 'count-up 1s ease-out',
        'rise': 'rise 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'flow': 'flow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'rise-on-scroll': 'rise-on-scroll 0.8s ease-out forwards',
        'water-flow': 'water-flow 15s ease infinite',
        'wave': 'wave 10s linear infinite',
        'wave-slide': 'wave-slide 15s linear infinite',
        'wave-motion': 'wave-motion 8s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
