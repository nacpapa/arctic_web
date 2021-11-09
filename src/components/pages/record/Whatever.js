import React from "react";
import "../../../App.css";
import Record from "./Record";

function Whatever() {
  return (
    <>
      <Record
        tittle="Whatever People Say I Am, That's What I'm Not"
        src="./records/whatever.jpeg"
        link="https://open.spotify.com/album/50Zz8CkIhATKUlQMbHO3k1?si=zon5wqBYQiSHPoGydsxv8A"
        description={
          <p>
            Whatever People Say I Am, That's What I'm Not is the debut studio
            album by English rock band Arctic Monkeys, released on 23 January
            2006 by Domino Recording Company. Prior to the release of Whatever
            People Say I Am, That's What I'm Not, Arctic Monkeys achieved their
            first UK number-ones with "I Bet You Look Good on the Dancefloor",
            which was the most acclaimed song of 2005, and "When the Sun Goes
            Down". The album became the fastest selling debut album in British
            music history
            <br></br>
            <h3>Songs</h3>
            1. "The View from the Afternoon" <br></br>
            2. "I Bet You Look Good on the Dancefloor"<br></br>
            3. "Fake Tales of San Francisco" <br></br>
            4. "Dancing Shoes" <br></br>
            5. "You Probably Couldn't See for the Lights but You Were Staring
            Straight at Me" <br></br>
            6. "Still Take You Home" <br></br>
            7. "Riot Van"<br></br>
            8. "Red Light Indicates Doors Are Secured"<br></br>
            9. "Mardy Bum"<br></br>
            10. "Perhaps Vampires Is a Bit Strong But..."<br></br>
            11. "When the Sun Goes Down"<br></br>
            12. "From the Ritz to the Rubble"<br></br>
            13. "A Certain Romance" <br></br>
          </p>
        }
      />
    </>
  );
}

export default Whatever;
