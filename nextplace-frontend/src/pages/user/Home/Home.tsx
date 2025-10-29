import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import ButtonsSection from "../../../components/ButtonsSections";
import EventCard from "../../../components/EventCard";
import Footer from "../../../components/Footer";

export default function Home() {
  const events = [
    { image: "/src/assets/images/event3.jpg", title: "Proyección película: Synthesis", date: "Agosto 20, 2026", tag: "Nuevo" },
    { image: "/src/assets/images/event1.jpg", title: "Proyección película: Sunset Sips", date: "Agosto 21, 2026", tag: "Nuevo" },
    { image: "/src/assets/images/event2.jpg", title: "Startup Summit", date: "Agosto 22, 2026", tag: "Nuevo" },
    { image: "/src/assets/images/event2.jpg", title: "Startup Summit", date: "Agosto 22, 2026", tag: "Nuevo" },
    { image: "/src/assets/images/event2.jpg", title: "Startup Summit", date: "Agosto 22, 2026", tag: "Nuevo" },
    { image: "/src/assets/images/event10.jpg", title: "Startup Summit", date: "Agosto 22, 2026", tag: "Nuevo" },
  ];

  return (
    <>
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <Header />
      <ButtonsSection />

      <main className="cards-container">
        {events.map((ev, idx) => (
          <EventCard
            key={idx}
            image={ev.image}
            title={ev.title}
            date={ev.date}
            tag={ev.tag}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}
