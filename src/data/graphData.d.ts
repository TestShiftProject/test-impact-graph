// describe a node in the test visualization graph
import {INode, ModelConfig} from "@antv/g6";

export interface TestGraphNode extends ModelConfig, INode {
    width: number;
    lines: Line[];
    signature: string;
    className: string;
}

export interface Line {
    covered: boolean;
    addCovered: boolean;
    code: string;
    callsMethod: boolean;
}