# Here is my take on Type Narrowing, in TypeScript: Making Union Types Safe

## Introduction

A variabel in TypeScript can have than one possible type. This's often shown using a union, such as `string | number`. Type narrowing checks a value. Makes the possible types fewer, in a part of the code. It is makes it possible to do operations that're specified to a type safely without using `any`.

## Detailed Explanation

The `typeof` operator is useful for JavaScript's primitive types. For example:

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return (value * 10).toString();
}
```

In the first branch, TypeScript knows `value` is a string; otherwise, it is a number.

For class instances, `instanceof` checks whether an object was created from a particular class or has that class in its prototype chain:

In the branch TypeScript knows that `value` is a string; otherwise it is a number.

For class instances `instanceof` checks whether an object was creating from a class or has that class, in its prototype chain:

```ts
class Dog {
  bark(): string {
    return "Woof";
  }
}

class Cat {
  meow(): string {
    return "Meow";
  }
}

function speak(pet: Dog | Cat): string {
  if (pet instanceof Dog) {
    return pet.bark();
  }

  return pet.meow();
}
```

The `in` operetor checks whether an object has a property. It helps understand object types:

```ts
type EmailMessage = { email: string };
type SmsMessage = { phone: string };

function contact(message: EmailMessage | SmsMessage): string {
  if ("email" in message) {
    return message.email;
  }

  return message.phone;
}
```

These checks give us information about how a value's shape. The compiler follows this information as code moves through paths and return points. This process is known as control-flow analysis.

## Conclusion

ype narowing helps make union types both safe. Use `typeof` when working with values `instanceof` for checking class instances and the `in` operator to test for object properties. These methods make the code easier to read and help the compiler find misstakes before the program runs.
