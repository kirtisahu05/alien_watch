import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  });

  useEffect(() => {
    // updates every second
    const interval = setInterval(() => {
      setTime((previousTime) => {
        let updatedSecond = previousTime.seconds + 1;
        let updatedMinutes = previousTime.minutes;
        let updatedHours = previousTime.hours;

        // Updating seconds every 10 seconds
        if (updatedSecond === 10) {
          updatedMinutes++;
          updatedSecond = 0;
        }

        // Updating mins every 10 mins
        if (updatedMinutes === 10) {
          updatedHours++;
          updatedMinutes = 0;
        }

        // Updating hours every 10 hours
        if (updatedHours === 10) {
          updatedHours = 0;
        }

        return {
          seconds: updatedSecond,
          minutes: updatedMinutes,
          hours: updatedHours
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Alien Watch</h1>
      <h5>
        Ever imagined if some day we get a friend from another planet to earth.
        They will be having different time zone on their planet according to
        there planet and sun placing in solor system and other paramters.
      </h5>
      <h4>
        Building a watch, where calculation are not so same as we have
        generally.
      </h4>

      <div className="watchDiv">
        <div>
          <span>{time.hours.toString().padStart(2, "0")}</span>
          <br />
          hrs
        </div>
        <div> : </div>
        <div>
          <span>{time.minutes.toString().padStart(2, "0")}</span>
          <br />
          mins
        </div>
        <div> : </div>
        <div>
          <span>{time.seconds.toString().padStart(2, "0")}</span>
          <br />
          secs
        </div>
      </div>
      <hr />
      <div className="rules">
        <p>
          <h4>Watch Rules:</h4>
          The clock starts counting at 00:00:00 <br />
          10 seconds equate 1 minute. <br />
          10 minutes equate 1 hour. <br />
          10 hour, should reset a clock to 00:00:00 <br />
          Each minute update should reset seconds to 00 <br />
          Each hour update should reset minutes (and seconds) to 00 <br />
        </p>
      </div>
    </div>
  );
}
