import CabanaComp from "components/cabana";
import Footer from "components/footer";
import Header from "components/header";
import { getCabanaData } from "controllers/contentful";
import Seo from "components/seo";
import { useRouter } from "next/router";

export default function CabanaPage({ cabana }: any) {
  const { asPath } = useRouter();

  return (
    <div>
      <Seo
        title={`${cabana.title} – Cabañas Las Princesas, Los Reartes`}
        description={`${cabana.title} en Cabañas Las Princesas, frente al río en Los Reartes. Totalmente equipada, con acceso al parque, pileta y quincho del complejo.`}
        path={asPath}
      />
      <Header></Header>
      <CabanaComp cabana={cabana}></CabanaComp>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticPaths() {
  const cabanas = [
    "apart-planta-baja",
    "apart-planta-alta",
    "cabana-dos-dormitorios",
    "cabana-dos-dormitorios-independiente",
    "cabana-un-dormitorio",
    "cabanas-superiores",
  ];
  return {
    paths: cabanas.map((cabana) => {
      return { params: { cabana } };
    }),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const cabanaPath = context.params.cabana;

  const call = await fetch(
    `https://cdn.contentful.com/spaces/aly420otq74v/environments/master/entries?access_token=HYuCeaD_m0pLp1FMJuD5Mho9CJYOdRZ-7l6U_4TO8Rc&content_type=${cabanaPath}`
  );
  const res = await call.json();
  const cabana = getCabanaData(res);

  return {
    props: { cabana },
  };
}
