import React from "react";
import "../../../App.css";
import Record from "./Record";

function SuckIt() {
  return (
    <>
      <Record
        tittle="Suck it and see"
        src="./records/suckit.jpg"
        link="https://open.spotify.com/album/2ym2jcqckXqWeTDoxz3Kst?si=WQEd7WklTqyax2QxUJa75A"
        description={
          <p>
            Suck It and See is the fourth studio album by English rock band
            Arctic Monkeys, released on 6 June 2011 by Domino Recording Company.
            Musically, Suck It and See represents a departure for the band
            following the darker sound of its predecessor Humbug (2009), the
            album features a wide variety of styles, from guitar pop to
            psychedelic pop. The album's title, a British phrase meaning "give
            it a try", was viewed as provocative in the United States.<br></br>
            <h3>Songs</h3>
            1. "She's Thunderstorms" <br></br>
            2. "Black Treacle" <br></br>
            3. "Brick by Brick" <br></br>
            4. "The Hellcat Spangled Shalalala" <br></br>
            5. "Don't Sit Down 'Cause I've Moved Your Chair" <br></br>
            6. "Library Pictures" <br></br>
            7. "All My Own Stunts"<br></br>
            8. "Reckless Serenade"<br></br>
            9. "Piledriver Waltz"<br></br>
            10. "Love Is a Laserquest"<br></br>
            11. "Suck It and See"<br></br>
            12. "That's Where You're Wrong"<br></br>
          </p>
        }
      />
    </>
  );
}

export default SuckIt;
