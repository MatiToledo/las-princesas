import { contentFetcher } from "lib";
import useSWRImmutable from "swr";
import {
  getImageContentful,
  getMultipleImagesContentful,
} from "controllers/contentful";
import { useRouter } from "next/router";

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
    };
  });

  return servicios;
}
export function useComplejoFotos() {
  const { data, error } = useSWRImmutable("complejo", contentFetcher);
  const assets = data?.includes.Asset;

  const fotos = data?.items[0].fields.images.map((image: any) => {
    const assetId = image.sys.id;
    const asset = assets.find((assetItem: any) => {
      const id = assetItem.sys.id;

      if (id === assetId) return true;
    });
    const img = "https:" + asset.fields.file.url;
    return {
      img,
      id: image.sys.id,
    };
  });

  return fotos;
}
