type A<T extends Record<string, unknown>> = T;

interface User {
  user: string;
}

// Why does interface not fit Record<string, unknown>r?
// @ts-expect-error
type B = A<User>
