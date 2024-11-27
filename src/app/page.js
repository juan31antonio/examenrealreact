'use client'
import Image from "next/image";
import styles from "./page.module.css";
import ImageCarousel from "./ImageCarousel";
import AnimalList from "./AnimalList";
import Library from "./Library";

export default function Home() {

  const imageList = [
    { src: 'https://picsum.photos/200/300?random=1', alt: 'Imagen 1' },
    { src: 'https://picsum.photos/200/300?random=2', alt: 'Imagen 2' },
    { src: 'https://picsum.photos/200/300?random=3', alt: 'Imagen 3' }
  ];

  return (
    <div >
      <ImageCarousel imagenes={imageList}></ImageCarousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AnimalList></AnimalList>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Library></Library>
    </div>
  );
}
