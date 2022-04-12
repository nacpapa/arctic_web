import React from "react";
import "./Members.css";

function Members() {
  return (
    <>
      <main className="members-conteiner">
        <section className="member-section">
          <div className="member-img">
            <img src="./members/alex.jpg" alt="hola" className="member" />
          </div>
          <aside className="member-text">
            {" "}
            <h1 className="member-tittle">Alex Turner</h1>
            <p className="member-bio">
              Alexander David Turner born 6 January 1986. Sheffield, England{" "}
              <br />
              Lyrics, guitar and composer.
              <br />
              When Turner was 16, he and three friends formed Arctic Monkeys in
              their native Sheffield.
              <br /> Their debut album, Whatever People Say I Am, That's What
              I'm Not (2006), became the fastest-selling debut album in British
              history
            </p>
          </aside>
        </section>
        <section className="member-section">
          <div className="member-img">
            <img src="./members/matt.jpg" alt="hola" className="member" />
          </div>
          <aside className="member-text">
            {" "}
            <h1 className="member-tittle">Matt Helders</h1>
            <p className="member-bio">
              Matthew Helders born 7 May 1986. Sheffield, England <br />
              Drums and lyrics.
              <br />
              Helders has said that he ended up playing drums as "that was the
              only thing left. When we started the band none of us played
              anything. We just put it together. They all had guitars and I
              bought a drum kit after a bit."
            </p>
          </aside>
        </section>
        <section className="member-section">
          <div className="member-img">
            <img src="./members/jamie.jpg" alt="hola" className="member" />
          </div>
          <aside className="member-text">
            {" "}
            <h1 className="member-tittle">Jamie Cook</h1>
            <p className="member-bio">
              Jamie Robert Cook born 8 July 1985. Sheffield, England <br />
              Guitar
              <br />
              Jamie Cook attended Ecclesfield Secondary School in Chapeltown,
              Sheffield. Originally a next door neighbour of fellow band member
              Alex Turner, Cook and the other band members picked up their
              respective instruments and formed the Arctic Monkeys in 2002.
            </p>
          </aside>
        </section>
        <section className="member-section">
          <div className="member-img">
            <img src="./members/nick.jpg" alt="hola" className="member" />
          </div>
          <aside className="member-text">
            {" "}
            <h1 className="member-tittle">Nick O'Malley</h1>
            <p className="member-bio">
              Nicholas O'Malley born 5 July 1985. Sheffield, England <br />
              Bass guitarist
              <br />
              O'Malley was drafted in as a temporary replacement for bassist
              Andy Nicholson when the latter announced he would not make the
              band's North America tour in May 2006 O'Malley says that he
              learned the whole of the band's debut album in two days of
              intensive play where he "pretty much didn't even leave the house"
            </p>
          </aside>
        </section>
      </main>
    </>
  );
}

export default Members;
