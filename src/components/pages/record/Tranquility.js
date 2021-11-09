import React from "react";
import "../../../App.css";
import Record from "./Record";

function Tranquility() {
  return (
    <>
      <Record
        tittle="Tranquility Base Hotel & Casio"
        src="./records/tranquility.jpg"
        link="https://open.spotify.com/album/1jeMiSeSnNS0Oys375qegp?si=oI_uku6-S1OawRemJGbC4Q"
        description={
          <p>
            Tranquility Base Hotel & Casino is the sixth studio album by English
            rock band Arctic Monkeys, released on 11 May 2018 by Domino
            Recording Company. It was written by band frontman Alex Turner in
            2016 on a Steinway Vertegrand piano in his Los Angeles home. The
            album features a rich sound that embodies psychedelic pop, lounge
            pop, space pop, and glam rock, as well as elements of jazz. It is a
            major departure from the band's previous guitar-heavy work, being
            less accessible than its internationally successful predecessor
            <br></br>
            <h3>Songs</h3>
            1. «Star Treatment» <br></br>
            2. «One Point Perspective» <br></br>
            3. «American Sports» <br></br>
            4. «Tranquility Base Hotel & Casino» <br></br>
            5. «Golden Trunks» <br></br>
            6. «Four Out of Five» <br></br>
            7. «The World's First Ever Monster Truck Front Flip» <br></br>
            8. «Science Fiction» <br></br>
            9. «She Looks Like Fun» <br></br>
            10. «Batphone» <br></br>
            11.«The Ultracheese» <br></br>
          </p>
        }
      />
    </>
  );
}

export default Tranquility;
