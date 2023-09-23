import {Graph, In} from './graph';
import * as fs from 'fs';


// read graph from input stream
const ins: In = fs.readFileSync('tinyG.txt', 'utf-8');
const graph: Graph = new Graph(ins);

console.log(graph);
