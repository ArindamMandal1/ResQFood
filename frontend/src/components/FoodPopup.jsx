import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import api from "../api/axios";

export default function FoodPopup({ food }) {
  return (
    <div className="rounded-xl w-56">
      <Carousel showThumbs={false} dynamicHeight={false}>
        {food.photos?.map((url, i) => (
          <div key={i}>
            <img src={url} alt={food.title} className="rounded-xl" />
          </div>
        ))}
      </Carousel>

      <h3 className="font-bold mt-1">{food.title}</h3>
      <p className="text-sm">{food.description}</p>

      <button
        className="bg-green-600 text-white px-2 py-1 mt-2 rounded text-sm"
        onClick={async () => {
          await api.post(`/foods/${food._id}/claim`);
          alert("Food claimed successfully!");
        }}
      >
        Claim
      </button>
    </div>
  );
}
