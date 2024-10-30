import { events } from "@/lib/events";

interface Props {
  params:{
    slug: string
  }
}

const EventDetailPage = () => ({params}: Props) => {
  const event = events.find((event) => event.slug === params.slug);
  return 
};
export default EventDetailPage;