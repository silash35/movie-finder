import { GetServerSideProps } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlaceInformation from "@/components/PlaceInformation";
import { IPlace } from "@/types/IPlace";
import url from "@/utils/url";

interface Props {
  place: IPlace;
}

const PlacePage = ({ place }: Props) => {
  return (
    <>
      <Head>
        <title>{place.name}</title>

        <meta property="og:title" content={place.name} key="ogTitle" />
        <meta name="twitter:title" content={place.name} key="twitterTitle" />
        <meta property="og:description" content={place.description} key="ogDescription" />
        <meta name="twitter:description" content={place.description} key="twitterDescription" />
      </Head>

      <Header />

      <main>
        <PlaceInformation place={place} />
      </main>

      <Footer />
    </>
  );
};

export default PlacePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(url + `/api/place?id=${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      place: data.body,
    },
    notFound: res.status != 200,
  };
};
