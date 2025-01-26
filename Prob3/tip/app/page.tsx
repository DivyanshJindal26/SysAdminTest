import HomeHeader from "@/components/home/home-header";
import Hackathon from "@/components/home/hackathon";
import EventCarousel from "@/components/home/event-carousel";
import LoginPrompt from "@/components/home/login-prompt";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between fade-in-page">
      <HomeHeader />
      <Hackathon />
      <EventCarousel />
      <LoginPrompt />
    </main>
  );
}
