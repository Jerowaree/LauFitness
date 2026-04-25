import { Helmet } from "react-helmet-async";

export const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": "Lau Fitness",
    "image": "/logolaufitness.png",
    "@id": "https://laufitness.fit/#gym",
    "url": "https://laufitness.fit",
    "telephone": "+51974775549",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Próceres 7585",
      "addressLocality": "Los Olivos",
      "addressRegion": "Lima",
      "postalCode": "15008",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -11.941196364261566,
      "longitude": -77.07818025792987
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    }
  };

  return (
    <Helmet>
      <title>Lau Fitness | El Mejor Gimnasio en Los Olivos, Lima Norte</title>
      <meta name="description" content="Entrena en Lau Fitness, el gimnasio premium de Los Olivos. Musculación, entrenamiento funcional y nutrición personalizada. ¡Transforma tu cuerpo hoy!" />
      <meta name="keywords" content="gimnasio en los olivos, gym los olivos, entrenamiento personal los olivos, gimnasio lima norte, lau fitness" />
      <link rel="canonical" href="https://laufitness.fit" />

      {/* Open Graph */}
      <meta property="og:title" content="Lau Fitness | Domina tu Cuerpo" />
      <meta property="og:description" content="Gimnasio premium en Los Olivos con tecnología de punta y coaches certificados." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://laufitness.fit" />
      <meta property="og:image" content="/logolaufitness.png" />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:site_name" content="Lau Fitness" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Lau Fitness | Domina tu Cuerpo" />
      <meta name="twitter:description" content="Gimnasio premium en Los Olivos con tecnología de punta y coaches certificados." />
      <meta name="twitter:image" content="/logolaufitness.png" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Lau Fitness" />
      <meta name="theme-color" content="#D60000" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
