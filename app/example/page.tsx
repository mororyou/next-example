export default function page() {
  return (
    <pre>
        {JSON.stringify(process.env, null, 2)}
    </pre>
  )
}
