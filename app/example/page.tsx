export default function page() {
  return (
    <pre>
      EXAMPLE:{process.env.EXAMPLE}

      <br />

      {JSON.stringify(process.env, null, 2)}
    </pre>
  )
}
