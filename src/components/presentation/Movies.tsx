import { MoviesResource } from "../../types";

export type Props = {
	title: string;
	resource: MoviesResource;
	isLargeRow?: string;
};

export function Movies({ title, resource }: Props) {
	console.log(resource.getOrThrow());
	return <div className="Row" />;
}
