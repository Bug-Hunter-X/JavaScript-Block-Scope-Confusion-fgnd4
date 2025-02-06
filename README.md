# JavaScript Block Scope Issue

This repository demonstrates a common JavaScript issue related to block scope.  The `bug.js` file contains code that exhibits unexpected behavior due to how JavaScript handles variable declarations within blocks (e.g., if statements, loops). The `bugSolution.js` file offers a corrected version.

**Problem:** Variables declared with `let` or `const` inside a block are only accessible within that block. This can lead to confusion when you expect a variable to be modified within a block, but it remains unchanged outside the block.

**Solution:** To avoid this issue, carefully consider variable scope. If you intend to modify a variable from within a block, ensure it's either declared outside the block or, if using `let`, you appropriately reassign it to the outer scope variable.  Alternatively, using a global variable is possible, but this approach is often discouraged due to potential naming conflicts.