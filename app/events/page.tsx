import EventCard from "../components/EventCard";    
import { NextEvent } from "@/lib/types";
import Events from "../components/Events";
import { events } from "@/lib/events";

const EventsPage = () => {
  return (
    <main className="mx-auto py-12 max-w-7xl px-4 sm:px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
        All Events
      </h1>
      <Events events={events} />
    </main>   
  );
};

export default EventsPage;