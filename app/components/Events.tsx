
import { NextEvent } from "@/lib/types";
import EventCard from "./EventCard";
import Link from "next/link";

const Events = ({ events }: { events: NextEvent[] }) => {
	return (
		<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
			<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
				{events.map((event) => (
					<Link key={event.id} href={`/event/${event.slug}`}>
					<EventCard event={event} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Events;