import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout backgroundImage="/images/background.png">
      <Container>
        <MemorialHeader
          fullName="Александр Викторович Карпук"
          birthDate="1964-06-15"
          deathDate="2024-10-09"
          photoUrl="http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/abd747b1-9661-444e-89b8-7956fe739b22/photo/1753237166172_l_i25vxr5z2_g-o9atgbp.webp"
          birthPlace="Телеханы, Беларусь"
          deathPlace="Брест, Беларусь"
        />
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}