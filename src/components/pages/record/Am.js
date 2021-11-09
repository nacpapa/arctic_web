import React from "react";
import "../../../App.css";
import Record from "./Record";

function Am() {
  return (
    <>
      <Record
        tittle="AM"
        src="./records/am.jpg"
        link="https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=lyIh0esRSoWERJITjd8-sw"
        description={
          <p>
            AM is the fifth studio album by English rock band Arctic Monkeys. It
            was produced by James Ford and co-produced by Ross Orton at Sage &
            Sound Recording in Los Angeles and Rancho De La Luna in Joshua Tree,
            California, and released in September 2013 through Domino. It
            featured in many year-end lists as one of the best albums of 2013.
            NME hailed it the best album of the decade and, just a month after
            its release, ranked it 449 on their list of the 500 Greatest Albums
            of All Time.
            <h3>Songs</h3>
            1. "Do I Wanna Know?" <br></br>
            2. "R U Mine?" <br></br>
            3. "One For The Road" <br></br>
            4. "Arabella" <br></br>
            5. "I Want It All" <br></br>
            6. "No.1 Party Anthem" <br></br>
            7. "Mad Sounds<br></br>
            8. "Fireside"<br></br>
            9. "Why'd You Only Call Me When You're High?"<br></br>
            10. "Snap Out Of It"<br></br>
            11. "Knee Socks"<br></br>
            12. "I Wanna Be Yours"<br></br>
          </p>
        }
      />
    </>
  );
}

export default Am;
