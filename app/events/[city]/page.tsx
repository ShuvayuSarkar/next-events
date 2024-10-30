import Events from "@/app/components/Events";
import { events } from "@/lib/events";

interface Props {
	params: {
		city: string;
	};
}


const EventsCityPage = async ({ params }: Props) => {
  const eventsByCity = events.filter((event) => event.city.toLowerCase() === params.city);
	return (
    <div className="mx-auto py-12 max-w-7xl px-4 sm:px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Events in <span className="capitalize">{params.city}</span>
      </h1>
      <Events events={eventsByCity} />
    </div>
  );
}
export default EventsCityPage;
