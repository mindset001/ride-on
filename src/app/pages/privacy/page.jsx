// pages/privacy.js

import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Add your privacy policy content here...
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  )
}
