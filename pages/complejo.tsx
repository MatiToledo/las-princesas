import ComplejoFotos from "components/complejo-fotos";
import Footer from "components/footer";
import Header from "components/header";
import { getComplejoImages } from "controllers/contentful";

export default function ComplejoPage({ images }: any) {
  return (
    <div>
      <Header></Header>
      <ComplejoFotos images={images}></ComplejoFotos>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const call = await fetch(
    `https://cdn.contentful.com/spaces/aly420otq74v/environments/master/entries?access_token=HYuCeaD_m0pLp1FMJuD5Mho9CJYOdRZ-7l6U_4TO8Rc&content_type=complejo`
  );
  const res = await call.json();
  const images = getComplejoImages(res);

  return {
    props: {
      images,
    },
  };
}
