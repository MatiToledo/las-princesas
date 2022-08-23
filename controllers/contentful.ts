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
  return img;
}
