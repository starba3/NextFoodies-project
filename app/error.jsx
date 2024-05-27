"use client"
export default function ErrorPage({error}) {
    
  return (
      <main className="error">
        <h1>An error occured!</h1>
        <p>Failed to load your favorite meals. Please try again later.</p>
      </main>
  );
}