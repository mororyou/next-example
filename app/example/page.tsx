export default function page() {
  return (
    <pre>
      EXAMPLE:{process.env.EXAMPLE}

      <br />

      VERCEL_URL:{process.env.VERCEL_URL}

      <br />

      {JSON.stringify(process.env, null, 2)}
    </pre>
  )
}
