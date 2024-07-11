import { Graph } from "./graph";
import { Paths } from "./paths";
import { NumberNull } from "./types";
import {Queue} from 'queue-typed';
import {Stack} from 'stack-typescript';

export class BreadthFirstPaths implements Paths {
	private marked: boolean[];
	private edgeTo: Array<NumberNull>;
	private s: number;

	constructor(G: Graph, s: number) {
		this.marked = Array.from(Array<boolean>(G.V), () => false);
		this.edgeTo = Array.from(Array<NumberNull>(G.V), () => null);
		this.s = s;
		this.bfs(G);
	}

	private bfs(G: Graph): void {
		const q: Queue<number> = new Queue<number>();
		q.push(this.s);
		this.marked[this.s] = true;
		while(!q.isEmpty()) {
			const v: number = q.shift() as number;
			for (const w of G.adj(v)) {
				if (!this.marked[w]) {
					q.push(w);
					this.marked[w] = true;
					this.edgeTo[w] = v;
				}
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
