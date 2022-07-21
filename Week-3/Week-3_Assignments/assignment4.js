function createStack() {
    const items = []; // by this push in parent scope does not have 'items' to access 
    return { 
        getItem:function(){
            return items
        },
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;
console.log(stack.items); // will give undefined
console.log(stack.getItem()) //will give you items if you needed 