import Link from "next/link"

export default function Slider(props) {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold text-gray-800 ">
      This is api test
    </h1>
  
    <p className="mt-4 text-lg text-gray-600">
     
      {props.slider[0].synopsis}
      
    </p>
  </div>
  )
}

export async function getStaticProps({ params }) {
   
    const slider = await fetch("https://https://training.aleksundshantu.de/wp-json/wp/v2/pages?slug=slider-beginner.sampleapis.com/futurama/info");
    const data = await slider.json();

    return {
        props: {
          slider
        },
      };
    }