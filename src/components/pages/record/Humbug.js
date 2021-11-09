import React from "react";
import "../../../App.css";
import Record from "./Record";

function Humbug() {
  return (
    <>
      <Record
        tittle="Humbug"
        src="./records/humbug.jpg"
        link="https://open.spotify.com/album/5IEoiwkThhRmSMBANhpxl2?si=BqDlGtlQQR2fFE3QKo6mog"
        description={
          <p>
            Humbug is the third studio album by English rock band Arctic
            Monkeys, first released on 19 August 2009 through the Domino
            Recording Company. The band started to write new material for the
            album towards the end of summer 2008, and finished it entirely in
            spring 2009.<br></br>
            <h3>Songs</h3>
            1. "My Propeller" <br></br>
            2. "Crying Lightning" <br></br>
            3. "Dangerous Animals" <br></br>
            4. "Secret Door" <br></br>
            5. "Potion Approaching" <br></br>
            6. "Fire and the Thud" <br></br>
            7. "Cornerstone"<br></br>
            8. "Dance Little Liar"<br></br>
            9. "Pretty Visitors"<br></br>
            10. "The Jeweller's Hands"<br></br>
          </p>
        }
      />
    </>
  );
}

export default Humbug;
