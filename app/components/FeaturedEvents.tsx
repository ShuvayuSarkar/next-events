import {events} from "@/lib/events";

const FeaturedEvents = () => {
  
	const featuredEvents = events.filter((event) => event.isFeatured);
	return (
		<div className="mx-auto text-center py-3 max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-3 mt-4 text-xl font-bold lg:text-3xl text-white">
				Featured Events
			</h1>{" "}
			<div className="">
				<div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
					<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
						{events.map((event) => (
							<div key={event.id}>
								<div className="relative">
									<div className="relative h-72 w-full overflow-hidden rounded-lg">
										<img
											src={event.imageUrl}
											alt={event.name}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<div className="relative mt-4">
										<h3 className="text-sm font-medium text-white">
											{event.name}
										</h3>
									</div>
									<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
										<div
											aria-hidden="true"
											className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
										/>
										<p className="relative text-lg font-semibold text-white">
											{event.date}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedEvents;
