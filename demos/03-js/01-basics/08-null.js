// null is a special value to be used for variables which will be assigned objects in future
let person = null;

person = {
    name: 'John',
    age: 32
};

// make person object eligible for garbage collection
person = null;