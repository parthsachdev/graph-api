import {Graph, In} from './graph';
import * as fs from 'fs';

// read graph from input stream
const ins: In = new In(fs.readFileSync(__dirname + '/examples/tinyG.txt', 'utf-8'));
const graph: Graph = new Graph(ins);

console.log(graph.toString());
console.log({
	adjOf3: graph.adj(3),
	degreeOf3: Graph.degree(graph, 3),
	maxDegree: Graph.maxDegree(graph),
	averageDegree: Graph.averageDegree(graph),
	numberOfSelfLoops: Graph.numberOfSelfLoops(graph)
});
