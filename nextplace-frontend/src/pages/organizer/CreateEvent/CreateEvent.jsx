import EventForm from "./EventForm";

export default function CreateEvent() {
  const handleCreate = (data) => {
    console.log("Crear evento →", data);
    // llamar API POST /events
  };

  return <EventForm mode="create" initialData={null} onSubmit={handleCreate} />;
}
