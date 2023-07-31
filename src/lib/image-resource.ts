import { Resource } from "./resource";

const cache = new Map<string, Resource<string>>();

export class ImageResource extends Resource<string> {
  private constructor(source: string) {
    super(ImageResource.generatePromise(source));
  }

  static generatePromise(source: string) {
    return new Promise<string>((resolve, reject) => {
      const image = new Image();
      image.src = source;
      image.addEventListener("load", () => {
        resolve(source);
      });
      image.addEventListener("error", () =>
        reject(new Error(`Failed to load image: ${source}.`)),
      );
    });
  }

  static create(source: string) {
    const resource = cache.get(source);
    if (resource) {
      return resource;
    }

    const newResource = new ImageResource(source);
    cache.set(source, newResource);

    return newResource;
  }
}
