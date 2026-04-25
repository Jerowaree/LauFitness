import { Helmet } from "react-helmet-async";

export const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Gym",
    "name": "Lau Fitness",
    "image": "/logolaufitness.png",
    "@id": "",
    "url": "https://laufitness.pe",
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
      
      {/* Open Graph */}
      <meta property="og:title" content="Lau Fitness | Domina tu Cuerpo" />
      <meta property="og:description" content="Gimnasio premium en Los Olivos con tecnología de punta y coaches certificados." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://laufitness.pe" />
      <meta property="og:image" content="/logolaufitness.png" />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
