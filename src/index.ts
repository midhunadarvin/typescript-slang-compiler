import { BinaryExpression } from "./ast/BinaryExpression";
import { NumericConstant } from "./ast/NumericConstant";
import { OPERATOR } from "./ast/Operator";
import { UnaryExpression } from "./ast/UnaryExpression";

function main() {
    // Abstract Syntax Tree (AST) for 5*10
    const ast1 = new BinaryExpression(
        new NumericConstant(5),
        new NumericConstant(10),
        OPERATOR.MUL
    );
    //
    // Evaluate the Expression
    //
    console.log(ast1.Evaluate(null));

    // AST for -(10 + (30 + 50 ) )
    const ast2 = new UnaryExpression(
        new BinaryExpression(
            new NumericConstant(10),
            new BinaryExpression(
                new NumericConstant(30),
                new NumericConstant(50),
                OPERATOR.PLUS
            ),
            OPERATOR.PLUS
        ),
        OPERATOR.MINUS
    );
    //
    // Evaluate the Expression
    //
    console.log(ast2.Evaluate(null));
}

main();