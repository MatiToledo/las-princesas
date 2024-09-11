import CabanaComp from "components/cabana";
import Footer from "components/footer";
import Header from "components/header";
import { useGetCabanaData } from "hooks";
import Head from "next/head";

export default function CabanaPage() {
  const cabana = useGetCabanaData();
  return (
    <div>
      <Head>
        <title>Las Princesas | {cabana.title}</title>
      </Head>
      <Header></Header>
      <CabanaComp cabana={cabana}></CabanaComp>
      <Footer></Footer>
    </div>
  );
}

// export async function getStaticPaths() {
//   const cabanas = [
//     "apart-planta-baja",
//     "apart-planta-alta",
//     "cabana-dos-dormitorios",
//     "cabana-dos-dormitorios-independiente",
//     "cabana-un-dormitorio",
//     "cabanas-superiores",
//   ];
//   return {
//     paths: cabanas.map((cabana) => {
//       return { params: { cabana } };
//     }),
//     fallback: false, // false or 'blocking'
//   };
// }

// export async function getStaticProps(context: any) {
//   const cabanaPath = context.params.cabana;

//   const call = await fetch(
//     `https://cdn.contentful.com/spaces/aly420otq74v/environments/master/entries?access_token=HYuCeaD_m0pLp1FMJuD5Mho9CJYOdRZ-7l6U_4TO8Rc&content_type=${cabanaPath}`
//   );
//   const res = await call.json();
//   const cabana = getCabanaData(res);

//   return {
//     props: { cabana },
//   };
// }
