import { Graph } from "./graph";
import { Paths } from "./paths";
import { Stack } from 'stack-typescript';
import { NumberNull } from "./types";

export class DepthFirstPaths implements Paths {
	private marked: boolean[];
	private edgeTo: Array<number | null>;
	private s: number;

	constructor(G: Graph, s: number) {
		this.marked = Array.from(Array<boolean>(G.V), () => false);
		this.edgeTo = Array.from(Array<NumberNull>(G.V), () => null);
		this.s = s;
		this.dfs(G, s);
	}

	private dfs(G: Graph, v: number): void {
		this.marked[v] = true;
		for (const w of G.adj(v)) {
			if (!this.marked[w]) {
				this.dfs(G, w);
				this.edgeTo[w] = v;
			}
		}
	}

	hasPathTo(v: number): boolean {
		return this.marked[v];
	}

	pathTo(v: number): NumberNull[] | null {
		if (!this.hasPathTo(v)) {
			return null;
		}
		const path: Stack<NumberNull> = new Stack<NumberNull>();
		for (let x: NumberNull = v; x != this.s; x = this.edgeTo[v]) {
			path.push(x);
		}
		path.push(this.s);
		return path.toArray();

	}

	printDS() {
		console.log({marked: JSON.stringify(this.marked), edgeTo: JSON.stringify(this.edgeTo)});
	}
}
