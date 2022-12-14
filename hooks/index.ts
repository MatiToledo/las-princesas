import { getImageContentful } from "controllers/contentful";
import { contentFetcher } from "lib";
import useSWRImmutable from "swr";

export function useAlojamientos() {
  const { data, error } = useSWRImmutable("alojamientos", contentFetcher);
  const assets = data?.includes.Asset;

  const alojamientos = data?.items.map((item: any) => {
    const img = getImageContentful(item, assets);
    return {
      key: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      img,
      path: item.fields.path,
      order: item.fields.order,
    };
  });

  return alojamientos;
}

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
