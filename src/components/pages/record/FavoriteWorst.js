import React from "react";
import "../../../App.css";
import Record from "./Record";

function FavoriteWorst() {
  return (
    <>
      <Record
        tittle="Favorite Worst Nightmare"
        src="./records/favoriteworse.jpeg"
        link="https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?si=-gXPwokNSB6cyl65DxyXOg"
        description={
          <p>
            Favourite Worst Nightmare is the second studio album by English rock
            band Arctic Monkeys, released on 18 April 2007 by Domino Recording
            Company.In its first week of release, the album sold over 227,000
            copies, going straight to number one in the UK Albums Chart.
            "Brianstorm" and "Fluorescent Adolescent" were also both hits on the
            UK Singles Chart, with the former reaching number two on the chart.
            <br></br>
            <h3>Songs</h3>
            1. "Brianstorm" <br></br>
            2. "Teddy Picker"<br></br>
            3. "D Is for Dangerous" <br></br>
            4. "Balaclava" <br></br>
            5. "Fluorescent Adolescent" <br></br>
            6. "Only Ones Who Know" <br></br>
            7. "Do Me a Favour"<br></br>
            8. "This House Is a Circus"<br></br>
            9. "If You Were There, Beware"<br></br>
            10. "The Bad Thing"<br></br>
            11. "Old Yellow Bricks"<br></br>
            12. "505"<br></br>
          </p>
        }
      />
    </>
  );
}

export default FavoriteWorst;
