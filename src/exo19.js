export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return new Proxy(object, {
    get(o, key) {
      return Reflect.get(o, key in alias ? alias[key] : key);
    },
    set(o, key, val) {
      return Reflect.set(o, key in alias ? alias[key] : key, val);
    }
  });
};

// example:
const originalUser = { name: "Sanchez", first: "Rick" };
const user = addAliasForProperties(originalUser, {
  lastName: "name",
  firstName: "first"
});

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  fn.count = 0;
  return new Proxy(fn, {
    apply(o, context, args) {
      o.count++;
      return Reflect.apply(o, context, args);
    }
  });
};

// example:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
