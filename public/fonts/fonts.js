import { Roboto, Poppins } from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"],
    display: "swap"
});

export const poppins = Poppins({
    weight: ["600", "700"],
    subsets: ["latin"],
    display: "swap"
});