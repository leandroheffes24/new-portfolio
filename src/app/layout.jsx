import "./globals.css";
import { roboto } from "../../public/fonts/fonts";

export const metadata = {
  title: "Leandro Heffes",
  description: "I'm a full-stack web developer passionate about creating dynamic, efficient, and scalable digital experiences. From sleek front-end designs to powerful back-end solutions, I turn ideas into reality. Explore my work and let's take your project to the next level!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
