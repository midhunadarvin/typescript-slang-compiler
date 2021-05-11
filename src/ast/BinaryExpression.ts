import { Expression } from "./Expression";
import { OPERATOR } from "./Operator";
import { RUNTIME_CONTEXT } from "./RuntimeContext";

/// <summary>
/// This class supports Binary Operators like + , - , / , *
/// </summary>
export class BinaryExpression implements Expression {
    private _ex1: Expression
    private _ex2: Expression;
    private _op: OPERATOR;

    /// <summary>
    ///
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <param name="op"></param>
    constructor(a: Expression, b: Expression, op: OPERATOR) {
        this._ex1 = a;
        this._ex2 = b;
        this._op = op;
    }

    /// <summary>
    /// While evaluating apply the operator after evaluating the left and right operands
    /// </summary>
    /// <param name="cont"></param>
    /// <returns></returns>
    public Evaluate(context: RUNTIME_CONTEXT | null): number
    {
        switch (this._op)
        {
            case OPERATOR.PLUS:
            return this._ex1.Evaluate(context) + this._ex2.Evaluate(context);
            case OPERATOR.MINUS:
            return this._ex1.Evaluate(context) - this._ex2.Evaluate(context);
            case OPERATOR.DIV:
            return this._ex1.Evaluate(context) / this._ex2.Evaluate(context);
            case OPERATOR.MUL:
            return this._ex1.Evaluate(context) * this._ex2.Evaluate(context);
        }
        return NaN;
    }
}