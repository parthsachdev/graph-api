/**
 * InputStream
 */
export class In extends String { }

/**
 * This graph is implented using Adjacency-list
 * graph representation
 */
export class Graph {

	private readonly _V: number;
	private readonly _E: number;
	private adjMatrix: Set<number | null>[];

	/**
	 * Create an empty graph with V vertices OR
	 * create a graph from empty stream
	 * @param VOrIn V: no of vertices or Input Stream
	 */
	public constructor(VOrIn: number | In) {
		if (typeof VOrIn === 'number') {
			this._V = VOrIn;
			this._E = 0;
		} else if (VOrIn instanceof In) {
			const lines = VOrIn.split('\n');
			this._V = Number(lines[0]);
			this._E = Number(lines[1]);
			lines.slice(2).forEach(l => {
				const [v1, v2] = l.split(' ');
				this.addEdge(Number(v1), Number(v2));
			});
			console.log(this._E);
		} else {
			throw new Error('Invalid Input');
		}
		this.adjMatrix = new Array<Set<number | null>>(this.V);
		for (let i=0; i<this.V; i++) {
			this.adjMatrix[i] = new Set<number>();
		}
	}

	/**
	 * add an edge v-w
	 */
	addEdge(v: number, w: number): void {}

	/**
	 *
	 * @param v vertex
	 * @returns vertices adjacent to v
	 */
	adj(v: number): number[] {
		return [];
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
		return '';
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
		return count / 2;
	}

}

