export function getImageContentful(item: any, assets: any) {
  const assetId = item.fields.image.sys.id;

  const asset = assets.find((assetItem: any) => {
    const id = assetItem.sys.id;

    if (id === assetId) return true;
  });
  const img = "https:" + asset.fields.file.url;
  return img;
}

export function getMultipleImagesContentful(image: any, assets: any) {
  const assetId = image.sys.id;
  const asset = assets.find((assetItem: any) => {
    const id = assetItem.sys.id;

    if (id === assetId) return true;
  });

  const img = "https:" + asset.fields.file.url;
  if (asset.fields.description) {
    return {
      img,
      description: asset.fields.description,
    };
  } else {
    return img;
  }
}

export function getAlojamientosData(data: any) {
  const assets = data?.includes.Asset;

  return data?.items.map((item: any) => {
    return {
      key: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      img: getImageContentful(item, assets),
      path: item.fields.path,
      order: item.fields.order,
    };
  });
}

export function getServiciosData(data: any) {
  const assets = data?.includes.Asset;

  return data?.items.map((item: any) => {
    return {
      key: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      img: getImageContentful(item, assets),
      order: item.fields.order,
    };
  });
}

export function getCabanaData(data: any) {
  const assets = data?.includes.Asset;

  const images = data?.items[0].fields.images.map((image: any) => {
    return getMultipleImagesContentful(image, assets);
  });

  const equipment = data?.items[0].fields.equipment.map((image: any) => {
    return getMultipleImagesContentful(image, assets);
  });

  return {
    title: data?.items[0].fields.title,
    description: data?.items[0].fields.description,
    images,
    equipment,
    googleDriveLink: data?.items[0].fields.googleDriveLink,
  };
}

export function getComplejoImages(data: any) {
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
