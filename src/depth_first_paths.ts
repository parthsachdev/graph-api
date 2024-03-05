import { Graph } from "./graph";
import { Paths } from "./paths";
import { Stack } from 'stack-typescript';
import { NumberNull } from "./types";

export class DepthFirstPaths implements Paths {
	private marked: boolean[];
	private edgeTo: Array<number | null>;
	private src: number;

	constructor(G: Graph, s: number) {
		this.marked = Array.from(Array<boolean>(G.V), () => false);
		this.edgeTo = Array.from(Array<NumberNull>(G.V), () => null);
		this.src = s;
		this.dfs(G, s);
	}

	private dfs(G: Graph, v: number): void {
		this.marked[v] = true;
		for (const w of G.adj(v)) {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.dfs(G, w);
			}
		}
	}

	hasPathTo(v: number): boolean {
		return this.marked[v];
	}

	pathTo(dest: number): NumberNull[] | null {
		if (!this.hasPathTo(dest)) {
			return null;
		}
		const path: Stack<NumberNull> = new Stack<NumberNull>();
		for (let x: NumberNull = dest; x !== this.src && x !== null; x = typeof x === 'number' ? this.edgeTo[x] : null) {
			path.push(x);
		}
		path.push(this.src);
		return path.toArray();
	}

	printDS() {
		console.table(Array(this.marked.length).fill(0).map((_, i) => ({marked: this.marked[i], edgeTo: this.edgeTo[i]})));
	}
}
