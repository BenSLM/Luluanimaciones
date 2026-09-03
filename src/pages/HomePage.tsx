import { Hero } from "../components/home/Hero"
import { Services } from "../components/home/Services"
import { Events } from "../components/home/Events"
import { GalleryPreview } from "../components/home/GalleryPreview"
import { About } from "../components/home/About"
import { FinalCta } from "../components/home/FinalCta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Events />
      <GalleryPreview />
      <About />
      <FinalCta />
    </>
  )
}
