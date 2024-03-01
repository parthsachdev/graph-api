import { Graph } from "./graph";
import { NumberNull } from "./types";

/**
 * This is a graph processing routine (for example DepthFirstSearch).
 * We provide a graph and a source as input
 * and extract information from it
 */
export abstract class Paths {
	constructor(G: Graph, v: number) {}
	abstract hasPathTo(v: number): boolean;
	abstract pathTo(v: number): NumberNull[] | null;
}
