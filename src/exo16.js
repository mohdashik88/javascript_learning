export function Person(first, name) {
  // TODO: assign first and name as own properties
  Object.assign(this, { first, name });
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: call Person constructor with the right context
  // TODO: assign rights as own property

  return Object.assign(Object.create(new Person(first, name)), rights);
}

// TODO: set Person.prototype as prototype of User.prototype

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});
/*User.prototype=Object.assign(Object.create(Person.prototype),
{
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }});*/
export const bob = new User("Bob", "Afett", ["create", "read"]);
