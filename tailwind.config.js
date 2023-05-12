/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00b39e',
        primary25: 'hsl(172.9608938547486, 100%, 25%)',
        primary40: 'hsl(172.9608938547486, 100%, 40%)',
        primary85: 'hsl(172.9608938547486, 100%, 85%)',
        primary95: 'hsl(172.9608938547486, 100%, 95%)',
        info: '#078cdf',
        info85: 'hsl(203.05555555555554, 93.9130434783%, 85%)',
        info95: 'hsl(203.05555555555554, 93.9130434783%, 95%)',
        warning: '#f16d0e',
        warning25: 'hsl(25.110132158590307, 89.0196078431%, 25%)',
        warning85: 'hsl(25.110132158590307, 89.0196078431%, 85%)',
        warning95: 'hsl(25.110132158590307, 89.0196078431%, 95%)',
        error: '#e60050',
        error25: 'hsl(339.1304347826087, 100%, 25%)',
        error85: 'hsl(339.1304347826087, 100%, 85%)',
        error95: 'hsl(339.1304347826087, 100%, 95%)',
        neutral: '#ccc',
        neutral60: 'hsl(0, 0%, 60%)',
        neutral90: 'hsl(0, 0%, 90%)',
        neutral95: 'hsl(0, 0%, 95%)',
        solid: '#1a1a1a',
        surface: '#fff',
      }
    },
  },
  plugins: [],
}

