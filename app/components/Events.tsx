
import { NextEvent } from "@/lib/types";
import EventCard from "./EventCard";

const Events = ({ events }: { events: NextEvent[] }) => {
	return (
		<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
			<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
};

export default Events;