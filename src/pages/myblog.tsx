import React from "react";
import Layout from "@theme/Layout";

import { Myblog, MyblogData } from "../components/myblog/Myblog";

const assetsDir = "./assets/projects";
const blogs: MyblogData[] = [
  {
    title: "Recopilación del viaje a México – 4 de septiembre",
    description: "Ahora estoy escribiendo en el vuelo de México a Panamá, terminando el viaje, este blog escribo para recopilar lo que pasó. Fabi del anterior blog, gracias por arriesgarte y aceptar el sponsorship, fue un viaje de aventura.",
    url: "../../blog/viaje-mexico",
    image: "https://tipsparatuviaje.com/wp-content/uploads/2019/03/a-donde-viajar-sola-por-primera-vez-en-mexico.jpg",
    role: "Baúl",
  },
  {
    title: "Divagando as a service",
    description: "Podcast. Cada viernes junto con Annita grabamos un nuevo eisodio donde hablamos de temas variados y experiencias personales.",
    url: "#",
    image: "https://assets.pippa.io/shows/undefined/1643076865142-6949cc9581a5e33c2d6674796339ee57.jpeg",
    role: "Co-Host",
  },
  {
    title: "Bambu Bolivia",
    description: "Tecnología disruptiva a favor de la prevención de la violencia de género. Emprendimiento social.",
    url: "#",
    image: "https://scontent.flpb3-1.fna.fbcdn.net/v/t1.6435-9/118919430_179582247114931_2281486561401095317_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CS43knZDVYIAX-UA4v0&_nc_ht=scontent.flpb3-1.fna&oh=00_AT-AkyxtvjlEbqFNOrsfp9rSu1oEGu-NQX-HHiiXdCu8fQ&oe=6356E63C",
    role: "Co-Founder",
  },
  {
    title: "Aprende Aymara",
    description: "Una aplicación móvil donde puedes aprender el idioma Aymara, lo desarrollé a los 18 años en 2017.",
    url: "#",
    image: "https://pbs.twimg.com/media/DUkTCWbUMAA6HEF.jpg:large",
    role: "Founder",
  },
];

const title = "Blog";
const description = "Featured projects I was/am involved in.";

export default function Blogs(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {blogs.map((blog) => (
            <Myblog key={blog.title} {...blog} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
