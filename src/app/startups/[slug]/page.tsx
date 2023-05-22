export const revalidate = 1200;

interface StartupCompany {
  name: string;
  slug: string;
  description: string;
  logo: string;
  website: string;
}

interface Props {
  params: { slug: string };
}

// export async function generateStaticParams() {
//   const startups: StartupCompany[] = await fetch(
//     "http://localhost:3000/api/startups",
//     { cache: "force-cache" }
//   ).then((res) => res.json());

//   return startups.map((s) => ({ slug: s.slug }));
// }

export default async function StartupPage({ params }: Props) {
  // const startups: StartupCompany[] = await fetch(
  //   "http://localhost:3000/api/startups",
  //   { cache: "force-cache" }
  // ).then((res) => res.json());

  // const startup = startups.find((s) => s.slug === params.slug)!;

  return (
    <div>
      {/* <h1>{startup.name}</h1>
      <p>{startup.description}</p> */}
      <div>Startups TBD</div>
    </div>
  );
}
