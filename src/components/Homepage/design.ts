import adidas from "@/assets/design/adidas.jpg"
import nike from "@/assets/design/nike.jpg"
import spiderman1 from "@/assets/design/spiderman-1.jpg"
import spiderman2 from "@/assets/design/spiderman-2.jpg"
import haagendazs1 from "@/assets/design/haagendazs-1.jpg"
import haagendazs2 from "@/assets/design/haagendazs-2.png"
import magazine1 from "@/assets/design/magazine-1.png"
import magazine2 from "@/assets/design/magazine-2.png"
import thankcard from "@/assets/design/thank-card.png"

export interface ImageItem {
  src: string;
  alt: string;
  description: string;
}

export const images: ImageItem[] = [
  {
    src: spiderman1,
    alt: "Spiderman poster",
    description: "Film Poster"
  },
  {
    src: spiderman2,
    alt: "Spiderman poster",
    description: "Film Poster"
  },
  {
    src: adidas,
    alt: "adidas poster",
    description: "Sneakers Poster"
  },
  {
    src: nike,
    alt: "nike poster",
    description: "Sneakers Poster"
  },
  {
    src: haagendazs1,
    alt: "haagendazs poster",
    description: "Food Poster"
  },
  {
    src: haagendazs2,
    alt: "haagendazs poster",
    description: "Food Poster"
  },
  {
    src: magazine1,
    alt: "magazine poster",
    description: "Magazine Poster"
  },
  {
    src: magazine2,
    alt: "magazine poster",
    description: "Magazine Poster"
  },
  {
    src: thankcard,
    alt: "thankcard poster",
    description: "Thank You Card"
  },
]