import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // This allows external access
    port: 5000,
    allowedHosts: ["growup1-1685303650.eu-central-1.elb.amazonaws.com", "localhost","ec2-52-57-134-148.eu-central-1.compute.amazonaws.com"],      // Where your app listens inside EC2/container
  },
  plugins: [tailwindcss(), react()],
});
