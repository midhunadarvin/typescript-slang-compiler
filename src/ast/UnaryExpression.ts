import { Expression } from "./Expression";
import { OPERATOR } from "./Operator";
import { RUNTIME_CONTEXT } from "./RuntimeContext";

/// <summary>
/// This class supports Unary Operators like + , - , / , *
/// </summary>
export class UnaryExpression implements Expression {
    private _ex1: Expression;
    private _op: OPERATOR;

    /// <summary>
    ///
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <param name="op"></param>
    constructor(a: Expression, op: OPERATOR) {
        this._ex1 = a;
        this._op = op;
    }

    /// <summary>
    /// While evaluating apply the unary operator after evaluating the operand.
    /// </summary>
    /// <param name="cont"></param>
    /// <returns></returns>
    public Evaluate(context: RUNTIME_CONTEXT | null): number {
        switch (this._op)
        {
        case OPERATOR.PLUS:
            return this._ex1.Evaluate(context);
        case OPERATOR.MINUS:
            return -this._ex1.Evaluate(context);
        }
        return NaN;
    }
}