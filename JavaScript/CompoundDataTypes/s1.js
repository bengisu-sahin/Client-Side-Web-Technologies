/*String is represented as objects injs */
let s = 'Hello World';
console.log(s);

let s2 = new String("Hello World");
console.log(s2);

/*
Var ile tanımlanan değişkenler daha sonra değiştirilebilir
Var ile tanımlanan değişlenler kodun herhangi bir yerinde ve birden fazla kez kullanılabilir . Ya da tekrar tanımlanabilir.
Var ile tanımlanan değişkenler fonksiyonların kapsamı içerisindedir (function scope) yani fonksiyon içerisinde Var kullanılarak tanımlanmış değişkenlere fonksiyon dışından erişim sağlanamaz.
*/

/*
 var function scope özelliği taşırken, let block scope özelliği taşımaktadır. Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.
*/
/**
 * let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.
 * var keyword’ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir.
 */

/* + operator concatanes strings and returns a completely new string*/
const age = 23;
s = "My" + "age" + "is" + age;//same as s=My age is ${age}
console.log(s);

//JS evaluates an expression from left to right.
s = 16 + 4 + 'abcde';
console.log(`16+4+'Hello' = ${s}`);
s = "Hello" + 16 + 4;
console.log(`'Hello'+16+4 = ${s}`);

/* String are objects and have many built-in methods */
const s1 = s.toUpperCase();  // Notice that s does not get changed. A new string is returned.
console.log(`s1: ${s1}`);

// IMPORTANT: A string is an immutable object, and cannot be changed as in Java, C#. Thus
let name = 'abc';
//name[1] = 'x';   // This is not possible! If you want to get a new string 'axb' from name, you must do the following:
name2 = name.substring(0, 1) + 'x' + name.substring(2, name.length);  // name2 = 'axc'
console.log(`name2: ${name2}`);