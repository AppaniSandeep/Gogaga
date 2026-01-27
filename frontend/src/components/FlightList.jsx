import FlightCard from "./FlightCard";

function FlightList() {
  return (
    <div className="flight-list">
      <div>
        <h3>Departure Flights</h3>
        <FlightCard />
        <FlightCard />
      </div>

      <div>
        <h3>Return Flights</h3>
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
}

export default FlightList;
