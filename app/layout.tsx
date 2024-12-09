import React from "react";
import "./global.css";

export const metadata = {
  title: "Nayana's Portflio",
  description: 'I coded this portfolio from scratch using React, Bootstrap, and Next.js. Here, you can find my relevant work experience, hobbies, and a way to contact me. Enjoy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Nayana's portfolio: all my work experience, projects, hobbies, and more!" />
        <meta name="keywords" content="HTML, CSS, Javascript, React, portfolio, resume, Nayana" />
        <meta name="author" content="Nayana Agrawal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

        <link href="./global.css" rel="sylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
