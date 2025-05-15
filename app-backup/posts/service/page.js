import Head from "next/head"
import Link from "next/link"


export default function page() {
  return (
    <>
    <Head>
      <title>Service Page</title>
      <meta name="description" content="This is the service page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
    </Head>
      <div className="bg-gray-100 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-800">
        This is the Service Page
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </p>
    </div>
    </>
    
  )
}
