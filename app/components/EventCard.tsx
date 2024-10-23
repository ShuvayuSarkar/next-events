
import { formatDate } from "@/lib/helpers";
import { NextEvent } from "@/lib/types";
import { formatRevalidate } from "next/dist/server/lib/revalidate";
import Image from "next/image";

const EventCard = ({ event }: { event: NextEvent }) => {
	return (
		<div key={event.id}>
			<div className="relative">
				<div className="relative h-72 w-full overflow-hidden rounded-lg">
					<Image
						src={event.imageUrl}
						alt={event.name}
						width={500}
						height={280}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="relative mt-4 text-center text-white">
					<h3 className="text-base font-bold ">{event.name}</h3>
					<h4>{event.location}</h4>
				</div>
				<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
					/>
					<p className="relative text-lg font-semibold text-white">
						{formatDate(event.date)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;