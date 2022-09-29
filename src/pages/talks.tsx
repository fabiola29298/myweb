import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import BuildingGQLAPIForK8sResDescription from "./assets/talks/_building-gql-api-for-k8s-res.md";
import DevTeamCollaborationGitBestPracticesDescription from "./assets/talks/_dev-team-collaboration-git-best-practices.md";
import GraphQLInGoDescription from "./assets/talks/_graphql-in-go.md";

const talks: TalkMetadata[] = [
  {
    title: "Ther Merge de Ethereum",
    description: <BuildingGQLAPIForK8sResDescription />,
    rol: "Organizer",
    events: [
      {
        name: "Meet-Up y celebración by Ethereum Bolivia",
        location: "Univalle, La Paz, Bolivia",
        date: new Date(2022, 9, 16),
      },
    ],
    recordingURL: "https://fb.watch/fLz99lolml/",
    slidesURL:
      "https://www.meetup.com/es/ethereum-bolivia/events/288228444/",
  },
  {
    title: "Entrenar a tu canhijo",
    description: <DevTeamCollaborationGitBestPracticesDescription />,
    rol: "Speaker",
    events: [
      {
        name: "Technolatinas",
        location: "Gliwice, Poland",
        date: new Date(2019, 2, 26),
      },
    ],
    slidesURL:
      "https://docs.google.com/presentation/d/12Izhj479oZ7ilDsAgljwBBHXt4_cPsX120QZtf1hIA4/edit",
  },
  {
    title: "ETHMexico",
    description: <GraphQLInGoDescription />,
    rol: "Participant/Hacker",
    events: [
      {
        name: "Gophers Silesia",
        location: "Katowice, Poland",
        date: new Date(2018, 4, 10),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=NjFXLbJvZmQ",
    slidesURL:
      "https://docs.google.com/presentation/d/1v6H21vHMd_rAZ9qjXcags2dMR2OYR-kQkarNVJZxbOs/edit",
    repoURL: "https://github.com/pkosiec/golang-graphql-samples",
  },
];

const title = "Talks";
const description = "Events about I was a speaker, organizer and participant.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}