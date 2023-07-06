import { ImgHTMLAttributes } from "react";
import { PartiallyPartial } from "../types";
import { ImageResource } from "../lib/image-resource";

export type Props = PartiallyPartial<
	ImgHTMLAttributes<HTMLImageElement>,
	"src" | "alt"
>;

export function SuspenseImage(props: Props) {
	ImageResource.create(props.src).read();
	return <img {...props} />;
}
