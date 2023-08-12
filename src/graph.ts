/**
 * InputStream
 */
export class In extends String {}

export class Graph {

	/**
	 * Create an empty graph with V vertices OR
	 * create a graph from empty stream
	 * @param VOrIn V: no of vertices or Input Stream
	 */
	public constructor(VOrIn: Number | In) {
		if (VOrIn instanceof Number) {

		} else if (VOrIn instanceof In) {

		} else {
			throw new Error('Invalid Input');
		}
	}

	/**
	 * add an edge v-w
	 */
	addEdge(v: Number, w: Number): void {}

	/**
	 *
	 * @param v vertex
	 * @returns vertices adjacent to v
	 */
	adj(v: Number): Number[] {
		return [];
	}

	/**
	 * @returns number of vertices
	 */
	V(): Number {
		return 0;
	}

	/**
	 * @returns no of edges
	 */
	E(): Number {
		return 0;
	}

	/** string representation */
	toString(): String {
		return '';
	}

}


