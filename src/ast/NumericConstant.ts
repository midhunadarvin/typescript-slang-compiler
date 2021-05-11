import { Expression } from "./Expression";
import { RUNTIME_CONTEXT } from "./RuntimeContext";

/// <summary>
/// one can store number inside the class
/// </summary>
export class NumericConstant implements Expression {
    private _value: number;

    /// <summary>
    /// Construction does not do much , just keeps the
    /// value assigned to the private variable
    /// </summary>
    /// <param name="value"></param>
    constructor (value: number) {
        this._value = value;
    }

    /// <summary>
    /// While evaluating a numeric constant , return the _value
    /// </summary>
    /// <param name="cont"></param>
    /// <returns></returns>
    public Evaluate(context: RUNTIME_CONTEXT): number {
        return this._value;
    }
}