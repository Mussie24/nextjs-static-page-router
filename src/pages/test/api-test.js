import Link from "next/link"

export default function Kontakt(props) {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold text-gray-800 ">
      This is api test
    </h1>
    <p className="mt-4 text-lg text-gray-600">{props.fotoRama[0].synopsis}</p>
    <p className="mt-4 text-lg text-gray-600">
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </p>
  </div>
  )
}

export async function getStaticProps({ params }) {
   
    const fotoRama = await fetch("https://api.sampleapis.com/futurama/info");
    const data = await fotoRama.json();

    return {
      props: {
        fotoRama: data,
      },
    };
  }