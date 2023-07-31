import { ImgHTMLAttributes } from "react";
import { PartiallyPartial } from "../types";
import { ImageResource } from "../lib/image-resource";

export type Props = PartiallyPartial<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt"
>;

export function SuspenseImage({ src, alt, ...props }: Props) {
  ImageResource.create(src).read();
  return <img src={src} alt={alt} {...props} />;
}
