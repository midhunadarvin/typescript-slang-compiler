import {RUNTIME_CONTEXT} from './RuntimeContext';

export abstract class Expression {
    public abstract Evaluate(context: RUNTIME_CONTEXT | null): number;
}