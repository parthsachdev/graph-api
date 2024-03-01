import assert from 'assert';

/**
 * InputStream
 */
export class In extends String { }

/**
 * This graph is implented using Adjacency-list
 * graph representation
 */
export class Graph {

	private readonly _V: number; // readonly means no of vertices cannot be changed
	private _E: number;
	private adjList: Set<number>[];

	/**
	 * Create an empty graph with V vertices OR
	 * create a graph from empty stream
	 * @param VOrIn V: no of vertices or Input Stream
	 */
	public constructor(VOrIn: number | In) {
		let edges: string[];
		this._E = 0;
		if (typeof VOrIn === 'number') {
			this._V = VOrIn;
			edges = [];
		} else if (VOrIn instanceof In) {
			const lines = VOrIn.split('\n');
			this._V = Number(lines[0]);
			const edgeCount = Number(lines[1]);
			edges = lines.slice(2);
			assert(edgeCount === edges.length, new Error('Invalid format: edges and edgeCount dont match'));
		} else {
			throw new Error('Invalid Input');
		}
		this.adjList = Array.from(Array<Set<number>>(this.V), () => new Set());
		edges.forEach(l => {
			const [v1, v2] = l.split(' ');
			this.addEdge(+v1, +v2);
		});
	}

	/**
	 * add an edge v-w
	 * when removing private, make sure that the defn of `get V()` and `get E()`
	 * is calcuated from the `adjList` and not stored anywhere
	 */
	addEdge(v: number, w: number): void {
		if (!this.adjList[v].has(w) && !this.adjList[w].has(v)) {
			this._E++;
		}
		this.adjList[v].add(w);
		this.adjList[w].add(v);
	}

	/**
	 *
	 * @param v vertex
	 * @returns vertices adjacent to v
	 */
	adj(v: number): number[] {
		return Array.from(this.adjList[v]);
	}

	/**
	 * @returns number of vertices
	 */
	get V(): number {
		return this._V;
	}

	/**
	 * @returns no of edges
	 */
	get E(): number {
		return this._E;
	}

	/** string representation */
	toString(): String {
		let str = `#Vertices: ${this.V}\n` + `#Edges: ${this.E}\n`;
		for (let i=0; i<this.V; i++) {
			str += `${i} -> ${Array.from(this.adjList[i])}\n`;
		}
		return str;
	}

	/** compute the degree of v */
	static degree(G: Graph, v: number): number {
		return G.adj(v).length;
	}

	/** compute maximum degree */
	static maxDegree(G: Graph): number {
		let max: number = 0;
		for (let v=0; v<G.V; v++) {
			const deg = Graph.degree(G, v);
			if (deg > max) {
				max = deg;
			}
		}
		return max;
	}

	/** compute averageDegree */
	static averageDegree(G: Graph): number {
		return 2.0 * G.E / G.V;
	}

	/** conut the number of self loops */
	static numberOfSelfLoops(G: Graph): number {
		let count: number = 0;
		for (let v=0; v<G.V; v++) {
			for (let w of G.adj(v)) {
				if (v === w) {
					count++;
				}
			}
		}
		return count;
	}

}

