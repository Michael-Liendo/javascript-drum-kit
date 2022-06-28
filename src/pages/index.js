import Head from 'next/head';
import drumPad from '../utils/drumPads.json';

function Button({ instrument }) {
  function play() {
    let audio = document.getElementById(instrument.key);
    audio.play();
  }

  document.addEventListener('keydown', (event) => {
    let name = event.key;

    if (name.toLocaleUpperCase() === instrument.key) {
      play();
    }
  });

  return (
    <>
      <button
        onClick={play}
        className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-1 rounded"
      >
        {instrument.key}
      </button>
      <audio id={instrument.key} src={instrument.url}></audio>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Drum Kit Machine </title>
      </Head>
      <h1 className="m-8 text-center text-4xl">Drum Kit Machine</h1>
      <div className="grid   grid-cols-3 lg:gap-4 lg:mx-48 content-center">
        {drumPad.map((instrument) => (
          <Button key={instrument.key} instrument={instrument} />
        ))}
      </div>
    </>
  );
}
