
export default function TestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Deploy Test Success!</h1>
      <p>If you can see this, it means the Vercel deployment is working for this route.</p>
      <p>Current Time: {new Date().toISOString()}</p>
    </div>
  );
}
