import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Mati",
    description: "Preserve native languages ​​on the blockchain. Mati is a Nahuatl word that means to know/feel. And Nahuatl is precisely the first language that we will keep on the blockchain.",
    url: "../../docs/Projects/20220907mati",
    image: "https://fabiola29298.github.io/ethmexico22/assets/images/logo100.png",
    role: "Co-Founder",
  },
  {
    title: "Divagando as a service",
    description: "Podcast. Cada viernes junto con Annita grabamos un nuevo eisodio donde hablamos de temas variados y experiencias personales.",
    url: "../../docs/Projects/20220202podcast",
    image: "https://assets.pippa.io/shows/undefined/1643076865142-6949cc9581a5e33c2d6674796339ee57.jpeg",
    role: "Co-Host",
  },
  {
    title: "Bambu Bolivia",
    description: "Tecnología disruptiva a favor de la prevención de la violencia de género. Emprendimiento social.",
    url: "../../docs/Projects/20211212bambu",
    image: "https://scontent.flpb3-1.fna.fbcdn.net/v/t1.6435-9/118919430_179582247114931_2281486561401095317_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CS43knZDVYIAX-UA4v0&_nc_ht=scontent.flpb3-1.fna&oh=00_AT-AkyxtvjlEbqFNOrsfp9rSu1oEGu-NQX-HHiiXdCu8fQ&oe=6356E63C",
    role: "Co-Founder",
  },
  {
    title: "Aprende Aymara",
    description: "Una aplicación móvil donde puedes aprender el idioma Aymara, lo desarrollé a los 18 años en 2017.",
    url: "../../docs/Projects/20190101aymara",
    image: "https://pbs.twimg.com/media/DUkTCWbUMAA6HEF.jpg:large",
    role: "Founder",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
