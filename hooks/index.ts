import { getImageContentful } from "controllers/contentful";
import { contentFetcher } from "lib";
import useSWRImmutable from "swr";
import housings from "housings.json";
import { useRouter } from "next/router";

export function useServicios() {
  const { data, error } = useSWRImmutable("servicios", contentFetcher);
  const assets = data?.includes.Asset;

  const servicios = data?.items.map((item: any) => {
    const img = getImageContentful(item, assets);
    return {
      key: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      img,
      order: item.fields.order,
    };
  });

  return servicios;
}

const equipmentsData = [
  {
    title: "anafeDoble",
    description: "Anafe doble",
    src: "/equipments/anafe.png",
  },
  {
    title: "cocina",
    description: "Cocina con horno",
    src: "/equipments/anafe.png",
  },
  {
    title: "microondas",
    description: "Microondas",
    src: "/equipments/microondas.png",
  },
  {
    title: "heladera",
    description: "Heladera bajo-mesada",
    src: "/equipments/heladera.png",
  },
  {
    title: "heladeraFreezer",
    description: "Heladera c/ freezer",
    src: "/equipments/heladera.png",
  },
  {
    title: "equipoCocina",
    description: "Equip. de cocina + vajilla completa ",
    src: "/equipments/equipo_cocina.png",
  },
  {
    title: "tv",
    description: `TV led 32" c/ DirecTV`,
    src: "/equipments/heladera.png",
  },
  {
    title: "tv43",
    description: `TV led 43" c/ DirecTV`,
    src: "/equipments/heladera.png",
  },
  {
    title: "ventilador",
    description: `Ventilador de techo`,
    src: "/equipments/heladera.png",
  },
  {
    title: "cajaSeguridad",
    description: `Caja de seguridad`,
    src: "/equipments/caja_seguridad.png",
  },
  {
    title: "secador",
    description: `Secador de pelo`,
    src: "/equipments/secador.png",
  },
  {
    title: "aire",
    description: `Aire acondicionado`,
    src: "/equipments/aire.png",
  },
];

export function useGetCabanaData() {
  const { asPath } = useRouter();
  const cabanaTitle = asPath.split("/")[2];
  const cabanaJson = housings.find((h: any) => h.path === cabanaTitle);

  const equipments = equipmentsData.filter((e: any) =>
    cabanaJson?.equipments.includes(e.title)
  );

  return {
    title: cabanaJson?.title,
    descriptions: cabanaJson?.descriptions,
    images: cabanaJson?.images,
    equipments,
  };
}
