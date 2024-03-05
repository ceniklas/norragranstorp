import React from "react";

export default function Home() {
  return (
    <div className="p-24 font-sans dark:text-white">
      <h1 className="my-8 text-5xl font-extrabold">Motion</h1>
      <h2 className="my-8 text-4xl font-bold">Att skriva en motion</h2>
      <p>
        Se den som en mer välmotiverad önskelista som tomten definitivt inte kan
        missa!
      </p>
      <h3 className="my-8 text-3xl font-bold">Vad är en motion?</h3>
      <p>
        Ordet &quot;motion&quot; betyder sätta i rörelse och innebär förslag
        till beslut som du vill ska fattas. Längre ned på sidan finns exempel på
        hur en motion formuleras och vad den bör innehålla. Varför ska jag
        skriva en motion? Om du ser att det finns behov av förändringar eller
        förbättringar kopplat till vårt område och våra gemensamhetsanläggningar
        (vägarna vi boende är delägare i) är det genom en motion som du bäst gör
        din röst hörd.
      </p>
      <h3 className="my-8 text-3xl font-bold">
        Vart ska jag skicka min motion?
      </h3>
      <p>
        Du mailar in din motion till{" "}
        <a href="mailto:styrelsen@norra.se">styrelsen@granstorp.se</a>
      </p>
      <h3 className="my-8 text-3xl font-bold">
        <p>Vad händer efter att jag skickat in min motion?</p>
      </h3>
      <p>
        Styrelsen är skyldig att adressera alla motioner som inkommer under
        året. Dessa ligger uppe sedan för demokratisk omröstning av alla som
        deltar i årsmötet och därigenom kan du enklast få igenom dina förslag.
      </p>
      <h3 className="my-8 text-3xl font-bold">Vad bör en motion innehålla?</h3>
      <p>
        En motion bör innehålla vad du vill förändra eller utveckla och vad du
        vill ska beslutas. Det är enklare att få igenom en motion som anger
        bakgrund och eventuell problembeskrivning. Därefter kommer du med ett
        kort förslag, det som kallas för ”att-satsen”. Det kan vara bra att dela
        upp förslaget i flera ”att-satser” eftersom man beslutar om varje
        ”att-sats” för sig (se exempel nedan). Motionen ska också skrivas under
        med namn/fastighetsbeteckning/datum.
      </p>
      <h3 className="my-8 text-3xl font-bold">Exempel på en motion:</h3>
      <p>
        Motion till Södra Granstorps vägförening angående våra grusvägar och
        Hustomtar
      </p>
      <br />
      <p>
        Eftersom vi är många boende här som kämpar med underhåll av våra vägar
        och ständig ifyllnad av hål med grus blir vi ofta trötta och utslitna.
        Risken finns att våra vägar förfaller.
      </p>
      <br />
      <p>
        Samtidigt har vi glömt bort våra vänner hustomtarna som finns vid vår
        sida och hjälper oss när vi behöver. De är dessutom både starkare och
        skickligare än de mest kompetenta människor och villiga att ställa upp.
      </p>
      <br />
      <p>Jag föreslår därför:</p>
      <ul className="mx-8 list-disc">
        <li>Att vi anlitar hustomtarna för regelbundet underhåll av vägarna</li>
        <li>Att vi ersätter dem med julgröt och vänligt bemötande</li>
        <li>Att varje hushåll sätter upp en tomtebostad för deras inhysning</li>
      </ul>
      <br />
      <p>Underskrift:</p>
      <p>Förnamn Efternamn, Granstorp 1:XX, 2020-XX-XX</p>
    </div>
  );
}
